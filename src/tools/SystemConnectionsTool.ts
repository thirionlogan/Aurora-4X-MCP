import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getDb } from '../db';

export interface SystemConnection {
  systemId: number;
  systemName: string;
  connectedTo: Array<{
    systemId: number;
    systemName: string;
    jumpGateRaceId: number;
  }>;
  connectionCount: number;
}

export const registerSystemConnectionsTool = (server: McpServer) => {
  server.tool(
    'getSystemConnections',
    'Get the system connections for a specific game and race',
    {
      gameId: z.number(),
      raceId: z.number(),
    },
    async ({ gameId, raceId }) => {
      const db = getDb();
      try {
        const query = `
                    WITH SystemNames AS (
                        -- Get system names from FCT_RaceSysSurvey and FCT_System
                        -- Only include systems that have been surveyed by the specified race or are Sol
                        SELECT DISTINCT
                            s.SystemID,
                            COALESCE(
                                rs.Name,
                                CASE 
                                    WHEN s.SolSystem = 1 THEN 'Sol'
                                END
                            ) as SystemName
                        FROM FCT_System s
                        LEFT JOIN FCT_RaceSysSurvey rs ON s.SystemID = rs.SystemID 
                            AND s.GameID = rs.GameID 
                            AND rs.RaceID = ?
                            AND rs.GameID = ?
                        WHERE s.GameID = ?
                        AND (rs.RaceID = ? OR s.SolSystem = 1)  -- Only include surveyed systems or Sol
                    ),
                    ConnectedSystems AS (
                        -- First get the source system and the destination warp point ID
                        -- Only include systems that are in SystemNames
                        SELECT 
                            s1.SystemID as SourceSystemID,
                            sn1.SystemName as SourceSystemName,
                            jp1.WPLink as DestinationWarpPointID,
                            jp1.JumpGateRaceID
                        FROM FCT_System s1
                        JOIN FCT_JumpPoint jp1 ON s1.SystemID = jp1.SystemID
                        JOIN SystemNames sn1 ON s1.SystemID = sn1.SystemID
                        WHERE s1.GameID = ?
                        AND jp1.WPLink > 0
                    ),
                    SystemLinks AS (
                        -- Then join with destination system information
                        -- Only include connections where both systems are known
                        SELECT 
                            cs.SourceSystemID,
                            cs.SourceSystemName,
                            s2.SystemID as DestinationSystemID,
                            sn2.SystemName as DestinationSystemName,
                            cs.JumpGateRaceID
                        FROM ConnectedSystems cs
                        JOIN FCT_JumpPoint jp2 ON cs.DestinationWarpPointID = jp2.WarpPointID
                        JOIN FCT_System s2 ON jp2.SystemID = s2.SystemID
                        JOIN SystemNames sn2 ON s2.SystemID = sn2.SystemID  -- This ensures destination is also known
                    )
                    SELECT 
                        SourceSystemID as systemId,
                        SourceSystemName as systemName,
                        json_group_array(
                            json_object(
                                'systemId', DestinationSystemID,
                                'systemName', DestinationSystemName,
                                'jumpGateRaceId', JumpGateRaceID
                            )
                        ) as connectedTo,
                        COUNT(DISTINCT DestinationSystemID) as connectionCount
                    FROM SystemLinks
                    GROUP BY SourceSystemID, SourceSystemName
                    ORDER BY 
                        CASE WHEN SourceSystemName = 'Sol' THEN 0 ELSE 1 END,
                        SourceSystemName;
                `;

        const results = db
          .prepare(query)
          .all(raceId, gameId, gameId, raceId, gameId) as Array<{
          systemId: number;
          systemName: string;
          connectedTo: string;
          connectionCount: number;
        }>;

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                results.map((row) => ({
                  systemId: row.systemId,
                  systemName: row.systemName,
                  connectedTo: JSON.parse(row.connectedTo),
                  connectionCount: row.connectionCount,
                })),
                null,
                2
              ),
            },
          ],
        };
      } finally {
        db.close();
      }
    }
  );
};
