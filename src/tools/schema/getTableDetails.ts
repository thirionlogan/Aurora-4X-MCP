import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';
import { getDb } from '../../db';

export const registerGetTableDetailsTool = (server: McpServer) => {
  server.tool(
    'getTableDetails',
    {
      tableName: z.string(),
    },
    async ({ tableName }) => {
      const db = getDb();
      try {
        // Get table structure
        const tableInfo = db
          .prepare(
            `SELECT sql FROM sqlite_master WHERE type = 'table' AND name = ?`
          )
          .get(tableName) as { sql: string } | undefined;

        if (!tableInfo) {
          return {
            content: [
              {
                type: 'text',
                text: `Table '${tableName}' not found`,
              },
            ],
            isError: true,
          };
        }

        // Get column info
        const columns = db
          .prepare(`PRAGMA table_info(${tableName})`)
          .all() as Array<{
          name: string;
          type: string;
          notnull: number;
          pk: number;
        }>;

        // Get foreign key info
        const foreignKeys = db
          .prepare(`PRAGMA foreign_key_list(${tableName})`)
          .all() as Array<{
          from: string;
          to: string;
          table: string;
        }>;

        // Get a small sample of data (just first row)
        const sampleData = db
          .prepare(`SELECT * FROM ${tableName} LIMIT 1`)
          .all();

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(
                {
                  name: tableName,
                  columns: columns.map((col) => ({
                    name: col.name,
                    type: col.type,
                    required: col.notnull === 1,
                    isPrimaryKey: col.pk === 1,
                  })),
                  relationships: foreignKeys.map((fk) => ({
                    fromColumn: fk.from,
                    toTable: fk.table,
                    toColumn: fk.to,
                  })),
                  sampleData,
                  commonQueries: [
                    `SELECT * FROM ${tableName} LIMIT 10;`,
                    `SELECT COUNT(*) FROM ${tableName};`,
                  ],
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
