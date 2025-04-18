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

export const registerGetCombatLogTool = (server: McpServer) => {
  server.tool(
    'getCombatLog',
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

        // Get combat logs
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
                -- Regular combat events
                (
                    FCT_GameLog.EventType IN (
                        SELECT EventTypeID 
                        FROM DIM_EventType 
                        WHERE EventTypeID != 99  -- Exclude commander health from this part
                        AND (
                            EventTypeID BETWEEN 334 AND 345  -- Ship combat and damage summaries
                            OR EventTypeID BETWEEN 300 AND 311     -- Ground combat summaries
                            OR EventTypeID = 314                   -- Ground Combat Intelligence
                            OR EventTypeID BETWEEN 346 AND 348     -- Fighter combat events
                            OR EventTypeID IN (219, 220, 221)      -- Boarding combat and crew losses
                            OR EventTypeID = 227                   -- Ramming attempts
                            OR EventTypeID = 297                   -- Boarding underway
                            OR (AttackEvent = 1)                   -- All attack events
                            OR (DamageDisplay != 0)                -- All damage display events
                        )
                    )
                )
                -- Combat-related commander health events
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
                text: `No combat logs found for RaceID ${raceId} in game ${gameId}`,
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
