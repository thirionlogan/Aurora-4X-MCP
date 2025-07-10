import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { registerListTablesTool } from './listTables';
import { registerGetTableDetailsTool } from './getTableDetails';
import { registerSearchColumnsTool } from './searchColumns';

export const registerSchemaTools = (server: McpServer) => {
  registerListTablesTool(server);
  registerGetTableDetailsTool(server);
  registerSearchColumnsTool(server);
};
