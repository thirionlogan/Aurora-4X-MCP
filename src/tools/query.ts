import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getDb } from '../db';

export const registerQueryTool = (server: McpServer) => {
  server.tool('query', { sql: z.string() }, async ({ sql }) => {
    const db = getDb();
    try {
      const stmt = db.prepare(sql);
      let results;

      // Check if the statement is a SELECT query
      const isSelect = sql.trim().toLowerCase().startsWith('select');

      if (isSelect) {
        results = stmt.all();
      } else {
        results = stmt.run();
      }

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(results, null, 2),
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
