import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getDb } from '../db';

interface PopulationStats {
  RaceName: string;
  ColonyCount: number;
  TotalPopulation: number;
}

interface ColonyDetails {
  PopulationID: number;
  PopulationName: string;
  Population: number;
  SystemName: string;
  BodyName: string;
}

interface SystemDistribution {
  SystemName: string;
  ColonyCount: number;
  TotalPopulation: number;
  Colonies: string;
}

export const registerGetEmpirePopulationTool = (server: McpServer) => {
  server.tool(
    'getEmpirePopulation',
    {
      gameId: z.number(),
      raceId: z.number(),
    },
    async ({ gameId, raceId }) => {
      const db = getDb();
      try {
        // Get basic population statistics
        const popStats = db
          .prepare(
            `SELECT 
              r.RaceName,
              COUNT(CASE WHEN p.Population > 0 THEN 1 END) as ColonyCount, 
              SUM(p.Population) as TotalPopulation
            FROM FCT_Population p
            JOIN FCT_Race r ON p.RaceID = r.RaceID AND p.GameID = r.GameID
            WHERE p.RaceID = ? AND p.GameID = ?`
          )
          .get(raceId, gameId) as PopulationStats;

        if (!popStats) {
          return {
            content: [
              {
                type: 'text',
                text: `Error: No population data found for RaceID ${raceId} in game ${gameId}`,
              },
            ],
            isError: true,
          };
        }

        // Get detailed colony information
        const colonies = db
          .prepare(
            `SELECT 
              p.PopulationID,
              p.PopName as PopulationName,
              p.Population,
              rss.Name as SystemName,
              COALESCE(sb.Name, '') as BodyName
            FROM FCT_Population p
            JOIN FCT_RaceSysSurvey rss ON p.SystemID = rss.SystemID AND p.GameID = rss.GameID AND p.RaceID = rss.RaceID
            LEFT JOIN FCT_SystemBody sb ON p.SystemBodyID = sb.SystemBodyID AND p.GameID = sb.GameID
            WHERE p.RaceID = ? AND p.GameID = ? AND p.Population > 0
            ORDER BY p.Population DESC`
          )
          .all(raceId, gameId) as ColonyDetails[];

        // Get population distribution by system
        const systemDistribution = db
          .prepare(
            `SELECT 
              rss.Name as SystemName,
              COUNT(*) as ColonyCount,
              SUM(p.Population) as TotalPopulation,
              GROUP_CONCAT(p.PopName) as Colonies
            FROM FCT_Population p
            JOIN FCT_RaceSysSurvey rss ON p.SystemID = rss.SystemID AND p.GameID = rss.GameID AND p.RaceID = rss.RaceID
            WHERE p.RaceID = ? AND p.GameID = ? AND p.Population > 0
            GROUP BY rss.SystemID, rss.Name
            ORDER BY TotalPopulation DESC`
          )
          .all(raceId, gameId) as SystemDistribution[];

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  raceName: popStats.RaceName,
                  summary: {
                    colonyCount: popStats.ColonyCount,
                    totalPopulation: popStats.TotalPopulation,
                  },
                  colonies: colonies,
                  systemDistribution: systemDistribution.map((sys) => ({
                    ...sys,
                    Colonies: sys.Colonies.split(','),
                  })),
                },
                null,
                2
              ),
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
