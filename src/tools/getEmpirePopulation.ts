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
              COUNT(*) as ColonyCount, 
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
              p.PopulationName,
              p.Population,
              s.SystemName,
              b.BodyName
            FROM FCT_Population p
            JOIN DIM_System s ON p.SystemID = s.SystemID
            JOIN DIM_Body b ON p.BodyID = b.BodyID
            WHERE p.RaceID = ? AND p.GameID = ?
            ORDER BY p.Population DESC`
          )
          .all(raceId, gameId) as ColonyDetails[];

        // TODO: Get population growth rates
        // const growthRates = db.prepare(`
        //   SELECT ... from population history
        // `).all(gameId, raceId);

        // TODO: Get population distribution by system
        // const systemDistribution = db.prepare(`
        //   SELECT ... group by system
        // `).all(gameId, raceId);

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
                  // TODO: Add these when implemented
                  // growthRates: growthRates,
                  // systemDistribution: systemDistribution,
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
