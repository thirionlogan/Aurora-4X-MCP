import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { registerSchemaResource } from './schema';
import { registerGamesResource } from './games';

export const registerResources = (server: McpServer) => {
  registerSchemaResource(server);
  registerGamesResource(server);
};
