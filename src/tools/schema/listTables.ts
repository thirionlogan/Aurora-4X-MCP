import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { getDb } from '../../db';

export const registerListTablesTool = (server: McpServer) => {
  server.tool('listTables', 'List all tables in the database', {}, async () => {
    const db = getDb();
    try {
      const tables = db
        .prepare(
          `SELECT name FROM sqlite_master 
           WHERE type = 'table' AND name NOT LIKE 'sqlite_%'
           ORDER BY name`
        )
        .all() as { name: string }[];

      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(
              {
                tables: tables.map((t) => t.name),
                usage:
                  'Use the getTableDetails tool to get more information about a specific table',
              },
              null,
              2
            ),
          },
        ],
      };
    } finally {
      db.close();
    }
  });
};
