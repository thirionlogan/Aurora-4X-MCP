import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getDb } from '../db';
import { convertAuroraDateTime } from '../utils/dateUtils';

interface CombatLogEntry {
  Time: number;
  EventType: string;
  MessageText: string;
  SystemName: string | null;
  formattedTime?: string;
}

export const registerGetGroundCombatLogTool = (server: McpServer) => {
  server.tool(
    'getGroundCombatLog',
    {
      gameId: z.number(),
      raceId: z.number(),
    },
    async ({ gameId, raceId }) => {
      const db = getDb();
      try {
        // Get game start year for timestamp conversion
        const gameData = db
          .prepare('SELECT StartYear FROM FCT_Game WHERE GameID = ?')
          .get(gameId) as { StartYear: number };

        if (!gameData) {
          return {
            content: [
              {
                type: 'text',
                text: `Error: No game data found for GameID ${gameId}`,
              },
            ],
            isError: true,
          };
        }

        // Get ground combat logs
        const combatLogs = db
          .prepare(
            `SELECT 
              FCT_GameLog.Time, 
              DIM_EventType.Description as EventType,
              FCT_GameLog.MessageText, 
              FCT_RaceSysSurvey.Name as SystemName
            FROM FCT_GameLog 
            JOIN DIM_EventType ON FCT_GameLog.EventType = DIM_EventType.EventTypeID
            LEFT JOIN FCT_RaceSysSurvey ON FCT_GameLog.SystemID = FCT_RaceSysSurvey.SystemID 
                AND FCT_GameLog.GameID = FCT_RaceSysSurvey.GameID 
                AND FCT_GameLog.RaceID = FCT_RaceSysSurvey.RaceID
            WHERE FCT_GameLog.EventType != 119  -- Exclude Fire Delay
            AND FCT_GameLog.GameID = ?
            AND FCT_GameLog.RaceID = ?
            AND (
                -- Ground combat events
                (
                    FCT_GameLog.EventType IN (
                        SELECT EventTypeID 
                        FROM DIM_EventType 
                        WHERE EventTypeID != 99  -- Exclude commander health from this part
                        AND (
                            EventTypeID = 75  -- Ground Combat Update
                            OR EventTypeID BETWEEN 300 AND 312  -- Ground combat summaries and reports
                            OR EventTypeID = 314  -- Ground Combat Intelligence
                            OR EventTypeID IN (352)  -- Bombardment Summary
                            OR EventTypeID IN (305, 306, 307, 308, 309)  -- Ground Unit Combat reports
                            OR EventTypeID IN (310, 311)  -- Ground support reassignments
                        )
                    )
                )
                -- Combat-related commander health events (ground-specific)
                OR (
                    FCT_GameLog.EventType = 99 
                    AND (
                        MessageText LIKE '% destruction %'
                        OR MessageText LIKE '% destroyed %'
                        OR MessageText LIKE '% damaged %'
                        OR MessageText LIKE '% combat %'
                        OR MessageText LIKE '% battle %'
                        OR MessageText LIKE '% killed in action %'
                        OR MessageText LIKE '% KIA %'
                    )
                    AND NOT (
                        MessageText LIKE '% medical %'
                        OR MessageText LIKE '% accident %'
                        OR MessageText LIKE '% retire %'
                        OR MessageText LIKE '% SS-%'  -- Exclude ship-related deaths
                    )
                )
            )
            ORDER BY FCT_GameLog.Time DESC`
          )
          .all(gameId, raceId) as CombatLogEntry[];

        if (!combatLogs || combatLogs.length === 0) {
          return {
            content: [
              {
                type: 'text',
                text: `No ground combat logs found for RaceID ${raceId} in game ${gameId}`,
              },
            ],
          };
        }

        // Format timestamps
        const formattedLogs = combatLogs.map((log) => ({
          ...log,
          formattedTime: convertAuroraDateTime(log.Time, gameData.StartYear)
            .formatted,
        }));

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(formattedLogs, null, 2),
            },
          ],
        };
      } catch (err: unknown) {
        const error = err as Error;
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error.message}`,
            },
          ],
          isError: true,
        };
      } finally {
        db.close();
      }
    }
  );
};
