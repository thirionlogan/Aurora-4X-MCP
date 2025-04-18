import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getDb } from '../db';
import { convertAuroraDateTime } from '../utils/dateUtils';

interface WealthStats {
  RaceName: string;
  WealthPoints: number;
  PreviousWealth: number;
  StartingWealth: number;
  AnnualWealth: number;
  WealthCreationRate: number;
}

interface WealthHistory {
  IncrementTime: number;
  WealthAmount: number;
  formattedTime?: string;
  change?: string;
}

interface WealthUsage {
  Description: string;
  Income: number;
  TotalAmount: number;
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

        // Get game start year
        const gameData = db
          .prepare('SELECT StartYear FROM FCT_Game WHERE GameID = ?')
          .get(gameId) as { StartYear: number };

        if (!gameData) {
          return {
            content: [
              {
                type: 'text',
                text: `Error: No game data found for GameID ${gameId}`,
              },
            ],
            isError: true,
          };
        }

        // Get wealth history
        const wealthHistory = db
          .prepare(
            `SELECT IncrementTime, WealthAmount 
             FROM FCT_WealthHistory 
             WHERE GameID = ? AND RaceID = ? 
             ORDER BY IncrementTime DESC`
          )
          .all(gameId, raceId) as WealthHistory[];

        // Format the timestamps
        const formattedHistory = wealthHistory.map((entry, index) => {
          const nextEntry = wealthHistory[index + 1];
          const change = nextEntry
            ? (entry.WealthAmount - nextEntry.WealthAmount).toLocaleString(
                undefined,
                { signDisplay: 'always' }
              )
            : '0';

          return {
            ...entry,
            formattedTime: convertAuroraDateTime(
              entry.IncrementTime,
              gameData.StartYear
            ).formatted,
            change,
          };
        });

        // Get wealth usage breakdown
        const wealthUsage = db
          .prepare(
            `SELECT 
              wu.Description,
              wu.Income,
              SUM(wd.Amount) as TotalAmount
            FROM FCT_WealthData wd
            JOIN DIM_WealthUse wu ON wd.UseID = wu.WealthUseID
            WHERE wd.GameID = ? AND wd.RaceID = ?
            GROUP BY wu.WealthUseID, wu.Description, wu.Income, wu.DisplayOrder
            ORDER BY wu.DisplayOrder, wu.Description`
          )
          .all(gameId, raceId) as WealthUsage[];

        // Separate and format income and expenses
        const income = wealthUsage
          .filter((item) => item.Income === 1)
          .map((item) => ({
            description: item.Description,
            amount: item.TotalAmount.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            }),
          }));

        const expenses = wealthUsage
          .filter((item) => item.Income === 0)
          .map((item) => ({
            description: item.Description,
            amount: item.TotalAmount.toLocaleString(undefined, {
              maximumFractionDigits: 2,
            }),
          }));

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
                    balanceHistory: formattedHistory,
                    transactions: {
                      income,
                      expenses,
                    },
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
