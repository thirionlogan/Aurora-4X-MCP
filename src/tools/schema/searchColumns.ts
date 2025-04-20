import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getDb } from '../../db';

export const registerSearchColumnsTool = (server: McpServer) => {
  server.tool(
    'searchColumns',
    {
      columnName: z.string(),
    },
    async ({ columnName }) => {
      const db = getDb();
      try {
        const tables = db
          .prepare(
            `SELECT DISTINCT m.name as table_name, p.name as column_name
             FROM sqlite_master m
             JOIN pragma_table_info(m.name) p
             WHERE m.type = 'table' 
             AND m.name NOT LIKE 'sqlite_%'
             AND p.name LIKE ?
             ORDER BY m.name`
          )
          .all(`%${columnName}%`) as Array<{
          table_name: string;
          column_name: string;
        }>;

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  matches: tables,
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
    }
  );
};
