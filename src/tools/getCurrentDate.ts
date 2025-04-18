import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getDb } from '../db';

export const registerGetCurrentDateTool = (server: McpServer) => {
  server.tool('getCurrentDate', { gameId: z.number() }, async ({ gameId }) => {
    const db = getDb();
    try {
      const result = db
        .prepare('SELECT GameTime, StartYear FROM FCT_Game WHERE GameID = ?')
        .get(gameId) as { GameTime: number; StartYear: number } | undefined;

      if (!result) {
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

      const { GameTime, StartYear } = result;

      // Constants for time calculations
      const secondsInMinute = 60;
      const secondsInHour = 60 * secondsInMinute;
      const secondsInDay = 24 * secondsInHour;
      const daysInMonth = 30;
      const monthsInYear = 12;
      const secondsInYear = daysInMonth * monthsInYear * secondsInDay;

      // Calculate all time components
      const totalYears = Math.floor(GameTime / secondsInYear);
      const remainingAfterYears = GameTime % secondsInYear;

      const totalMonths = Math.floor(
        remainingAfterYears / (secondsInDay * daysInMonth)
      );
      const remainingAfterMonths =
        remainingAfterYears % (secondsInDay * daysInMonth);

      const totalDays = Math.floor(remainingAfterMonths / secondsInDay);
      const remainingAfterDays = remainingAfterMonths % secondsInDay;

      const hours = Math.floor(remainingAfterDays / secondsInHour);
      const remainingAfterHours = remainingAfterDays % secondsInHour;

      const minutes = Math.floor(remainingAfterHours / secondsInMinute);
      const seconds = remainingAfterHours % secondsInMinute;

      const year = StartYear + totalYears;
      const month = totalMonths + 1; // 1-based months
      const day = totalDays + 1; // 1-based days

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                raw: {
                  gameTime: GameTime,
                  startYear: StartYear,
                },
                calculated: {
                  year,
                  month,
                  day,
                  hours,
                  minutes,
                  seconds,
                },
                formatted: `Year ${year}, Month ${month}, Day ${day} - ${String(
                  hours
                ).padStart(2, '0')}:${String(minutes).padStart(
                  2,
                  '0'
                )}:${String(seconds).padStart(2, '0')}`,
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
  });
};
