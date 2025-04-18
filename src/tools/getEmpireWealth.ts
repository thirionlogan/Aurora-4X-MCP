import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getDb } from '../db';

interface WealthStats {
  RaceName: string;
  WealthPoints: number;
  PreviousWealth: number;
  StartingWealth: number;
  AnnualWealth: number;
  WealthCreationRate: number;
}

interface WealthHistory {
  Date: number;
  WealthSpent: number;
  WealthReceived: number;
  Balance: number;
}

export const registerGetEmpireWealthTool = (server: McpServer) => {
  server.tool(
    'getEmpireWealth',
    {
      gameId: z.number(),
      raceId: z.number(),
    },
    async ({ gameId, raceId }) => {
      const db = getDb();
      try {
        // Get current wealth statistics
        const wealthStats = db
          .prepare(
            `SELECT 
              RaceName,
              WealthPoints,
              PreviousWealth,
              StartingWealth,
              AnnualWealth,
              WealthCreationRate
            FROM FCT_Race 
            WHERE GameID = ? AND RaceID = ?`
          )
          .get(gameId, raceId) as WealthStats;

        if (!wealthStats) {
          return {
            content: [
              {
                type: 'text',
                text: `Error: No wealth data found for RaceID ${raceId} in game ${gameId}`,
              },
            ],
            isError: true,
          };
        }

        // Get wealth history
        const wealthHistory = db
          .prepare(
            `SELECT Date, WealthSpent, WealthReceived, Balance 
             FROM FCT_WealthHistory 
             WHERE GameID = ? AND RaceID = ? 
             ORDER BY Date DESC LIMIT 5`
          )
          .all(gameId, raceId) as WealthHistory[];

        // Get wealth usage breakdown
        const wealthUsage = db
          .prepare(
            `SELECT 
              wu.Description,
              SUM(wh.WealthSpent) as TotalSpent
            FROM FCT_WealthHistory wh
            JOIN DIM_WealthUse wu ON wh.WealthUseID = wu.WealthUseID
            WHERE wh.GameID = ? AND wh.RaceID = ?
            GROUP BY wu.WealthUseID, wu.Description
            ORDER BY TotalSpent DESC`
          )
          .all(gameId, raceId);

        // TODO: Get projected wealth changes
        // const projectedChanges = db.prepare(`
        //   SELECT ... from scheduled projects, maintenance, etc.
        // `).all(gameId, raceId);

        // TODO: Get economic indicators
        // const economicStats = db.prepare(`
        //   SELECT ... various economic stats and trends
        // `).get(gameId, raceId);

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  current: {
                    points: wealthStats.WealthPoints,
                    previous: wealthStats.PreviousWealth,
                    starting: wealthStats.StartingWealth,
                    annual: wealthStats.AnnualWealth,
                    creationRate: wealthStats.WealthCreationRate,
                  },
                  history: {
                    recentTransactions: wealthHistory,
                    usageBreakdown: wealthUsage,
                  },
                  // TODO: Add these when implemented
                  // projectedChanges: projectedChanges,
                  // economicIndicators: economicStats,
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
