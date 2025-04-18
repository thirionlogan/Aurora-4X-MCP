import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { getDb } from '../db';

export const registerSchemaResource = (server: McpServer) => {
  server.resource('schema', 'schema://main', async (uri) => {
    const db = getDb();
    try {
      const tables = db
        .prepare(
          `SELECT name, sql FROM sqlite_master WHERE type = 'table' AND name NOT LIKE 'sqlite_%'`
        )
        .all() as { name: string; sql: string }[];

      // Format the schema in a more standard way
      const schemaText = tables
        .map((t) => t.sql + ';') // Add semicolon to each statement
        .join('\n\n'); // Add spacing between statements

      return {
        contents: [
          {
            uri: uri.href,
            text: schemaText,
          },
        ],
      };
    } finally {
      db.close();
    }
  });
};
