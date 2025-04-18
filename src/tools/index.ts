import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { registerQueryTool } from './query';
import { registerGetCurrentDateTool } from './getCurrentDate';

export const registerTools = (server: McpServer) => {
  registerQueryTool(server);
  registerGetCurrentDateTool(server);
};
