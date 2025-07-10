import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getDb } from '../../db';

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
    'Get the current fuel status for a specific game and race',
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

        // Get detailed colony fuel information using the correct tables
        const colonies = db
          .prepare(
            `SELECT 
              p.PopulationID,
              p.PopName as PopulationName,
              p.FuelStockpile,
              rss.Name as SystemName,
              sb.Name as BodyName
            FROM FCT_Population p
            JOIN FCT_RaceSysSurvey rss ON p.SystemID = rss.SystemID 
              AND p.GameID = rss.GameID 
              AND p.RaceID = rss.RaceID
            LEFT JOIN FCT_SystemBody sb ON p.SystemBodyID = sb.SystemBodyID 
              AND p.GameID = sb.GameID
            WHERE p.RaceID = ? AND p.GameID = ? AND p.FuelStockpile > 0
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
