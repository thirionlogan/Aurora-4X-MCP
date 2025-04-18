import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getDb } from '../db';

interface Minerals {
  Duranium: number;
  Neutronium: number;
  Corbomite: number;
  Tritanium: number;
  Boronide: number;
  Mercassium: number;
  Vendarite: number;
  Sorium: number;
  Uridium: number;
  Corundium: number;
  Gallicite: number;
}

interface ColonyMinerals extends Minerals {
  PopulationID: number;
  PopName: string;
}

// TODO: Interface for production vs consumption rates
interface MineralFlowRates extends Minerals {
  ProductionRate: number;
  ConsumptionRate: number;
}

// TODO: Interface for mineral deposits
interface MineralDeposit extends Minerals {
  SystemID: number;
  SystemName: string;
  BodyID: number;
  BodyName: string;
  Accessibility: number;
}

// TODO: Interface for minerals in transit
interface MineralsInTransit extends Minerals {
  SourceID: number;
  SourceName: string;
  DestinationID: number;
  DestinationName: string;
  ETA: number;
}

export const registerGetEmpireMineralsTool = (server: McpServer) => {
  server.tool(
    'getEmpireMinerals',
    {
      gameId: z.number(),
      raceId: z.number(),
    },
    async ({ gameId, raceId }) => {
      const db = getDb();
      try {
        // Get mineral stockpiles
        const empireMinerals = db
          .prepare(
            `SELECT 
              SUM(Duranium) as Duranium, 
              SUM(Neutronium) as Neutronium, 
              SUM(Corbomite) as Corbomite, 
              SUM(Tritanium) as Tritanium, 
              SUM(Boronide) as Boronide, 
              SUM(Mercassium) as Mercassium, 
              SUM(Vendarite) as Vendarite, 
              SUM(Sorium) as Sorium, 
              SUM(Uridium) as Uridium, 
              SUM(Corundium) as Corundium, 
              SUM(Gallicite) as Gallicite
            FROM FCT_Population 
            WHERE RaceID = ? AND GameID = ?`
          )
          .get(raceId, gameId) as Minerals;

        if (!empireMinerals) {
          return {
            content: [
              {
                type: 'text',
                text: `Error: No mineral data found for RaceID ${raceId} in game ${gameId}`,
              },
            ],
            isError: true,
          };
        }

        // Get per-colony breakdown, excluding colonies with no minerals
        const colonyMinerals = db
          .prepare(
            `SELECT 
              PopulationID, 
              PopName, 
              Duranium, 
              Neutronium, 
              Corbomite, 
              Tritanium, 
              Boronide, 
              Mercassium, 
              Vendarite, 
              Sorium, 
              Uridium, 
              Corundium, 
              Gallicite
            FROM FCT_Population 
            WHERE RaceID = ? 
              AND GameID = ?
              AND (
                Duranium != 0 OR 
                Neutronium != 0 OR 
                Corbomite != 0 OR 
                Tritanium != 0 OR 
                Boronide != 0 OR 
                Mercassium != 0 OR 
                Vendarite != 0 OR 
                Sorium != 0 OR 
                Uridium != 0 OR 
                Corundium != 0 OR 
                Gallicite != 0
              )
            ORDER BY PopulationID`
          )
          .all(raceId, gameId) as ColonyMinerals[];

        // TODO: Get production vs consumption rates
        // Query should join FCT_Population with production-related tables
        // to calculate total production rates and consumption rates per mineral type
        // const mineralFlowRates = db.prepare(`
        //   SELECT ... production and consumption rates ...
        //   FROM FCT_Population p
        //   JOIN ... production tables ...
        //   WHERE RaceID = ? AND GameID = ?
        // `).get(raceId, gameId) as MineralFlowRates;

        // TODO: Get mineral deposits in controlled systems
        // Query should look at FCT_MineralDeposit table for deposits in systems
        // where the empire has a presence or survey data
        // const mineralDeposits = db.prepare(`
        //   SELECT ... deposit information ...
        //   FROM FCT_MineralDeposit md
        //   JOIN ... system control tables ...
        //   WHERE RaceID = ? AND GameID = ?
        // `).all(raceId, gameId) as MineralDeposit[];

        // TODO: Get minerals in transit via mass drivers
        // Query should look at mass driver packets in flight
        // const massDriverMinerals = db.prepare(`
        //   SELECT ... packet contents ...
        //   FROM FCT_MassDriverPacket mdp
        //   WHERE RaceID = ? AND GameID = ?
        // `).all(raceId, gameId) as MineralsInTransit[];

        // TODO: Get minerals in transit via cargo ships
        // Query should look at ship cargo holds and their destinations
        // const cargoShipMinerals = db.prepare(`
        //   SELECT ... cargo contents ...
        //   FROM FCT_Ship s
        //   JOIN ... cargo tables ...
        //   WHERE RaceID = ? AND GameID = ?
        //   AND s.HasCargo = 1
        // `).all(raceId, gameId) as MineralsInTransit[];

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  totalStockpiles: {
                    ...empireMinerals,
                  },
                  colonyBreakdown: colonyMinerals,
                  // TODO: Add these fields when queries are implemented
                  // productionRates: mineralFlowRates,
                  // availableDeposits: mineralDeposits,
                  // inTransit: {
                  //   massDriverPackets: massDriverMinerals,
                  //   cargoShips: cargoShipMinerals
                  // }
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
