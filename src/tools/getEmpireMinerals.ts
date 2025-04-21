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

interface MineralStats {
  total: number;
  accessibility: number;
}

interface MineralData {
  [mineralName: string]: MineralStats;
}

interface BodyMineralData {
  bodyName: string;
  minerals: MineralData;
}

interface RawMineralDeposit {
  SystemID: number;
  SystemName: string;
  BodyName: string;
  [key: string]: number | string; // For dynamic mineral fields
}

interface SystemMineralData {
  systemName: string;
  systemTotals: MineralData;
  bodies: BodyMineralData[];
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
    'Get the current mineral status for a specific game and race',
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

        // Get mineral deposits in controlled systems
        //FIXME DOESN'T WORK
        const mineralDeposits = db
          .prepare(
            `WITH SystemTotals AS (
              SELECT 
                s.SystemID,
                sbn_sys.Name as SystemName,
                SUM(CASE WHEN md.MaterialID = 1 THEN md.Amount ELSE 0 END) as Duranium_total,
                MAX(CASE WHEN md.MaterialID = 1 THEN md.Accessibility ELSE NULL END) as Duranium_accessibility,
                SUM(CASE WHEN md.MaterialID = 2 THEN md.Amount ELSE 0 END) as Neutronium_total,
                MAX(CASE WHEN md.MaterialID = 2 THEN md.Accessibility ELSE NULL END) as Neutronium_accessibility,
                SUM(CASE WHEN md.MaterialID = 3 THEN md.Amount ELSE 0 END) as Corbomite_total,
                MAX(CASE WHEN md.MaterialID = 3 THEN md.Accessibility ELSE NULL END) as Corbomite_accessibility,
                SUM(CASE WHEN md.MaterialID = 4 THEN md.Amount ELSE 0 END) as Tritanium_total,
                MAX(CASE WHEN md.MaterialID = 4 THEN md.Accessibility ELSE NULL END) as Tritanium_accessibility,
                SUM(CASE WHEN md.MaterialID = 5 THEN md.Amount ELSE 0 END) as Boronide_total,
                MAX(CASE WHEN md.MaterialID = 5 THEN md.Accessibility ELSE NULL END) as Boronide_accessibility,
                SUM(CASE WHEN md.MaterialID = 6 THEN md.Amount ELSE 0 END) as Mercassium_total,
                MAX(CASE WHEN md.MaterialID = 6 THEN md.Accessibility ELSE NULL END) as Mercassium_accessibility,
                SUM(CASE WHEN md.MaterialID = 7 THEN md.Amount ELSE 0 END) as Vendarite_total,
                MAX(CASE WHEN md.MaterialID = 7 THEN md.Accessibility ELSE NULL END) as Vendarite_accessibility,
                SUM(CASE WHEN md.MaterialID = 8 THEN md.Amount ELSE 0 END) as Sorium_total,
                MAX(CASE WHEN md.MaterialID = 8 THEN md.Accessibility ELSE NULL END) as Sorium_accessibility,
                SUM(CASE WHEN md.MaterialID = 9 THEN md.Amount ELSE 0 END) as Uridium_total,
                MAX(CASE WHEN md.MaterialID = 9 THEN md.Accessibility ELSE NULL END) as Uridium_accessibility,
                SUM(CASE WHEN md.MaterialID = 10 THEN md.Amount ELSE 0 END) as Corundium_total,
                MAX(CASE WHEN md.MaterialID = 10 THEN md.Accessibility ELSE NULL END) as Corundium_accessibility,
                SUM(CASE WHEN md.MaterialID = 11 THEN md.Amount ELSE 0 END) as Gallicite_total,
                MAX(CASE WHEN md.MaterialID = 11 THEN md.Accessibility ELSE NULL END) as Gallicite_accessibility
              FROM FCT_MineralDeposit md
              JOIN FCT_SystemBody sb ON md.SystemBodyID = sb.SystemBodyID
              JOIN FCT_System s ON sb.SystemID = s.SystemID
              JOIN FCT_SystemBodyName sbn_sys ON s.SystemID = sbn_sys.SystemBodyID
              JOIN FCT_Population p ON sb.SystemBodyID = p.SystemBodyID
              WHERE p.GameID = ? 
              AND p.RaceID = ?
              AND sbn_sys.RaceID = ?
              AND sbn_sys.GameID = ?
              GROUP BY s.SystemID, sbn_sys.Name
            )
            SELECT 
              s.SystemID,
              st.SystemName,
              sbn.Name as BodyName,
              st.Duranium_total as System_Duranium_total,
              st.Duranium_accessibility as System_Duranium_accessibility,
              st.Neutronium_total as System_Neutronium_total,
              st.Neutronium_accessibility as System_Neutronium_accessibility,
              st.Corbomite_total as System_Corbomite_total,
              st.Corbomite_accessibility as System_Corbomite_accessibility,
              st.Tritanium_total as System_Tritanium_total,
              st.Tritanium_accessibility as System_Tritanium_accessibility,
              st.Boronide_total as System_Boronide_total,
              st.Boronide_accessibility as System_Boronide_accessibility,
              st.Mercassium_total as System_Mercassium_total,
              st.Mercassium_accessibility as System_Mercassium_accessibility,
              st.Vendarite_total as System_Vendarite_total,
              st.Vendarite_accessibility as System_Vendarite_accessibility,
              st.Sorium_total as System_Sorium_total,
              st.Sorium_accessibility as System_Sorium_accessibility,
              st.Uridium_total as System_Uridium_total,
              st.Uridium_accessibility as System_Uridium_accessibility,
              st.Corundium_total as System_Corundium_total,
              st.Corundium_accessibility as System_Corundium_accessibility,
              st.Gallicite_total as System_Gallicite_total,
              st.Gallicite_accessibility as System_Gallicite_accessibility,
              SUM(CASE WHEN md.MaterialID = 1 THEN md.Amount ELSE 0 END) as Duranium_total,
              MAX(CASE WHEN md.MaterialID = 1 THEN md.Accessibility ELSE NULL END) as Duranium_accessibility,
              SUM(CASE WHEN md.MaterialID = 2 THEN md.Amount ELSE 0 END) as Neutronium_total,
              MAX(CASE WHEN md.MaterialID = 2 THEN md.Accessibility ELSE NULL END) as Neutronium_accessibility,
              SUM(CASE WHEN md.MaterialID = 3 THEN md.Amount ELSE 0 END) as Corbomite_total,
              MAX(CASE WHEN md.MaterialID = 3 THEN md.Accessibility ELSE NULL END) as Corbomite_accessibility,
              SUM(CASE WHEN md.MaterialID = 4 THEN md.Amount ELSE 0 END) as Tritanium_total,
              MAX(CASE WHEN md.MaterialID = 4 THEN md.Accessibility ELSE NULL END) as Tritanium_accessibility,
              SUM(CASE WHEN md.MaterialID = 5 THEN md.Amount ELSE 0 END) as Boronide_total,
              MAX(CASE WHEN md.MaterialID = 5 THEN md.Accessibility ELSE NULL END) as Boronide_accessibility,
              SUM(CASE WHEN md.MaterialID = 6 THEN md.Amount ELSE 0 END) as Mercassium_total,
              MAX(CASE WHEN md.MaterialID = 6 THEN md.Accessibility ELSE NULL END) as Mercassium_accessibility,
              SUM(CASE WHEN md.MaterialID = 7 THEN md.Amount ELSE 0 END) as Vendarite_total,
              MAX(CASE WHEN md.MaterialID = 7 THEN md.Accessibility ELSE NULL END) as Vendarite_accessibility,
              SUM(CASE WHEN md.MaterialID = 8 THEN md.Amount ELSE 0 END) as Sorium_total,
              MAX(CASE WHEN md.MaterialID = 8 THEN md.Accessibility ELSE NULL END) as Sorium_accessibility,
              SUM(CASE WHEN md.MaterialID = 9 THEN md.Amount ELSE 0 END) as Uridium_total,
              MAX(CASE WHEN md.MaterialID = 9 THEN md.Accessibility ELSE NULL END) as Uridium_accessibility,
              SUM(CASE WHEN md.MaterialID = 10 THEN md.Amount ELSE 0 END) as Corundium_total,
              MAX(CASE WHEN md.MaterialID = 10 THEN md.Accessibility ELSE NULL END) as Corundium_accessibility,
              SUM(CASE WHEN md.MaterialID = 11 THEN md.Amount ELSE 0 END) as Gallicite_total,
              MAX(CASE WHEN md.MaterialID = 11 THEN md.Accessibility ELSE NULL END) as Gallicite_accessibility
            FROM FCT_MineralDeposit md
            JOIN FCT_SystemBody sb ON md.SystemBodyID = sb.SystemBodyID
            JOIN FCT_System s ON sb.SystemID = s.SystemID
            JOIN FCT_SystemBodyName sbn ON md.SystemBodyID = sbn.SystemBodyID
            JOIN FCT_Population p ON sb.SystemBodyID = p.SystemBodyID
            JOIN SystemTotals st ON s.SystemID = st.SystemID
            WHERE p.GameID = ? 
            AND p.RaceID = ?
            AND sbn.RaceID = ?
            AND sbn.GameID = ?
            GROUP BY s.SystemID, st.SystemName, sbn.Name
            ORDER BY s.SystemID, sbn.Name`
          )
          .all(
            gameId,
            raceId,
            raceId,
            gameId,
            gameId,
            raceId,
            raceId,
            gameId
          ) as RawMineralDeposit[];

        // Transform the raw query results into the desired format
        const systemsMap = new Map<
          number,
          SystemMineralData & { systemName: string }
        >();

        mineralDeposits.forEach((body) => {
          const systemId = body.SystemID;
          if (!systemsMap.has(systemId)) {
            systemsMap.set(systemId, {
              systemName: body.SystemName,
              systemTotals: formatMineralData(body, 'System_'),
              bodies: [],
            });
          }

          systemsMap.get(systemId)?.bodies.push({
            bodyName: body.BodyName,
            minerals: formatMineralData(body),
          });
        });

        function formatMineralData(
          data: RawMineralDeposit,
          prefix = ''
        ): MineralData {
          const minerals: MineralData = {};
          const mineralTypes = [
            'Duranium',
            'Neutronium',
            'Corbomite',
            'Tritanium',
            'Boronide',
            'Mercassium',
            'Vendarite',
            'Sorium',
            'Uridium',
            'Corundium',
            'Gallicite',
          ];

          mineralTypes.forEach((mineral) => {
            const total = data[`${prefix}${mineral}_total`] as number;
            const accessibility = data[
              `${prefix}${mineral}_accessibility`
            ] as number;
            if (total) {
              minerals[mineral] = {
                total,
                accessibility,
              };
            }
          });

          return minerals;
        }

        const formattedMineralDeposits = Array.from(systemsMap.values());

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
                  mineralDeposits: formattedMineralDeposits,
                  // TODO: Add these fields when queries are implemented
                  // productionRates: mineralFlowRates,
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
