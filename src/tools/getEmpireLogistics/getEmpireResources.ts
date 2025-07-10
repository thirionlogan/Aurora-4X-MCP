import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getDb } from '../../db';

interface RaceResourceData {
  RaceName: string;
  MaintenanceCapacity: number;
  OrdnanceCapacity: number;
  FighterCapacity: number;
  ShipBuilding: number;
  FuelProduction: number;
  ConstructionProduction: number;
  OrdnanceProduction: number;
  FighterProduction: number;
  MineProduction: number;
  Research: number;
  MSPProduction: number;
  MaxRefuellingRate: number;
  UnderwayReplenishmentRate: number;
  EconomicProdModifier: number;
}

export const registerGetEmpireResourcesTool = (server: McpServer) => {
  server.tool(
    'getEmpireResources',
    'Get the current resource status for a specific game and race',
    {
      gameId: z.number(),
      raceId: z.number(),
    },
    async ({ gameId, raceId }) => {
      const db = getDb();
      try {
        const race = db
          .prepare(
            `SELECT 
              RaceName,
              MaintenanceCapacity,
              OrdnanceCapacity,
              FighterCapacity,
              ShipBuilding,
              FuelProduction,
              ConstructionProduction,
              OrdnanceProduction,
              FighterProduction,
              MineProduction,
              Research,
              MSPProduction,
              MaxRefuellingRate,
              UnderwayReplenishmentRate,
              EconomicProdModifier
            FROM FCT_Race 
            WHERE GameID = ? AND RaceID = ?`
          )
          .get(gameId, raceId) as RaceResourceData;

        if (!race) {
          return {
            content: [
              {
                type: 'text',
                text: `Error: No race found with RaceID ${raceId} in game ${gameId}`,
              },
            ],
            isError: true,
          };
        }

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  raceName: race.RaceName,
                  capacities: {
                    maintenance: race.MaintenanceCapacity,
                    ordnance: race.OrdnanceCapacity,
                    fighter: race.FighterCapacity,
                    maxRefuelling: race.MaxRefuellingRate,
                    underwayReplenishment: race.UnderwayReplenishmentRate,
                  },
                  production: {
                    shipBuilding: race.ShipBuilding,
                    fuel: race.FuelProduction,
                    construction: race.ConstructionProduction,
                    ordnance: race.OrdnanceProduction,
                    fighter: race.FighterProduction,
                    mine: race.MineProduction,
                    msp: race.MSPProduction,
                    research: race.Research,
                    economicModifier: race.EconomicProdModifier,
                  },
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
