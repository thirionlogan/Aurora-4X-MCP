import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getDb } from '../db';

interface FleetStats {
  activeShipCount: number;
  totalShipyardCount: number;
  totalShipyardCapacity: number;
  totalSlipways: number;
}

interface ShipClassBreakdown {
  ClassName: string;
  HullType: string;
  ShipCount: number;
  TotalTonnage: number;
}

export const registerGetEmpireFleetTool = (server: McpServer) => {
  server.tool(
    'getEmpireFleet',
    {
      gameId: z.number(),
      raceId: z.number(),
    },
    async ({ gameId, raceId }) => {
      const db = getDb();
      try {
        // Get basic fleet statistics
        const fleetStats = db
          .prepare(
            `SELECT 
              (SELECT COUNT(*) FROM FCT_Ship WHERE RaceID = ? AND GameID = ? AND Destroyed = 0) as activeShipCount,
              (SELECT COUNT(*) FROM FCT_Shipyard WHERE RaceID = ? AND GameID = ?) as totalShipyardCount,
              (SELECT SUM(Capacity) FROM FCT_Shipyard WHERE RaceID = ? AND GameID = ?) as totalShipyardCapacity,
              (SELECT SUM(Slipways) FROM FCT_Shipyard WHERE RaceID = ? AND GameID = ?) as totalSlipways`
          )
          .get(
            raceId,
            gameId,
            raceId,
            gameId,
            raceId,
            gameId,
            raceId,
            gameId
          ) as FleetStats;

        // Get breakdown by ship class
        const classBreakdown = db
          .prepare(
            `SELECT 
              c.ClassName,
              h.Description as HullType,
              COUNT(*) as ShipCount,
              SUM(c.Size * 50) as TotalTonnage
            FROM FCT_Ship s
            JOIN FCT_ShipClass c ON s.ShipClassID = c.ShipClassID
            JOIN FCT_HullDescription h ON c.HullDescriptionID = h.HullDescriptionID
            WHERE s.RaceID = ? 
              AND s.GameID = ? 
              AND s.Destroyed = 0
            GROUP BY c.ClassName, h.Description
            ORDER BY TotalTonnage DESC`
          )
          .all(raceId, gameId) as ShipClassBreakdown[];

        // TODO: Get ships under construction
        // const shipsUnderConstruction = db.prepare(`
        //   SELECT ... from shipyard construction queue
        // `).all(raceId, gameId);

        // TODO: Get fleet deployment status
        // const fleetDeployment = db.prepare(`
        //   SELECT ... fleet locations and assignments
        // `).all(raceId, gameId);

        // TODO: Get maintenance status
        // const maintenanceStatus = db.prepare(`
        //   SELECT ... maintenance requirements and status
        // `).all(raceId, gameId);

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  overview: {
                    activeShips: fleetStats.activeShipCount,
                    shipyards: {
                      count: fleetStats.totalShipyardCount,
                      totalCapacity: fleetStats.totalShipyardCapacity,
                      totalSlipways: fleetStats.totalSlipways,
                    },
                  },
                  shipClasses: classBreakdown,
                  // TODO: Add these when implemented
                  // underConstruction: shipsUnderConstruction,
                  // deployment: fleetDeployment,
                  // maintenance: maintenanceStatus,
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
