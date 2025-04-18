import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getDb } from '../db';

interface FuelStats {
  RaceName: string;
  TotalFuel: number;
  MaxRefuellingRate: number;
  UnderwayReplenishmentRate: number;
  FuelProduction: number;
}

interface ColonyFuelDetails {
  PopulationID: number;
  PopulationName: string;
  FuelStockpile: number;
  SystemName: string;
  BodyName: string;
}

export const registerGetEmpireFuelTool = (server: McpServer) => {
  server.tool(
    'getEmpireFuel',
    {
      gameId: z.number(),
      raceId: z.number(),
    },
    async ({ gameId, raceId }) => {
      const db = getDb();
      try {
        // Get basic fuel statistics
        const fuelStats = db
          .prepare(
            `SELECT 
              r.RaceName,
              SUM(p.FuelStockpile) as TotalFuel,
              r.MaxRefuellingRate,
              r.UnderwayReplenishmentRate,
              r.FuelProduction
            FROM FCT_Population p
            JOIN FCT_Race r ON p.RaceID = r.RaceID AND p.GameID = r.GameID
            WHERE p.RaceID = ? AND p.GameID = ?`
          )
          .get(raceId, gameId) as FuelStats;

        if (!fuelStats) {
          return {
            content: [
              {
                type: 'text',
                text: `Error: No fuel data found for RaceID ${raceId} in game ${gameId}`,
              },
            ],
            isError: true,
          };
        }

        // Get detailed colony fuel information
        const colonies = db
          .prepare(
            `SELECT 
              p.PopulationID,
              p.PopulationName,
              p.FuelStockpile,
              s.SystemName,
              b.BodyName
            FROM FCT_Population p
            JOIN DIM_System s ON p.SystemID = s.SystemID
            JOIN DIM_Body b ON p.BodyID = b.BodyID
            WHERE p.RaceID = ? AND p.GameID = ?
            ORDER BY p.FuelStockpile DESC`
          )
          .all(raceId, gameId) as ColonyFuelDetails[];

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  raceName: fuelStats.RaceName,
                  summary: {
                    totalFuel: fuelStats.TotalFuel,
                    maxRefuellingRate: fuelStats.MaxRefuellingRate,
                    underwayReplenishmentRate:
                      fuelStats.UnderwayReplenishmentRate,
                    fuelProduction: fuelStats.FuelProduction,
                  },
                  colonies: colonies,
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
