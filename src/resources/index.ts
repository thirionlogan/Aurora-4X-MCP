import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { registerGamesResource } from './games';

export const registerResources = (server: McpServer) => {
  registerGamesResource(server);
};
