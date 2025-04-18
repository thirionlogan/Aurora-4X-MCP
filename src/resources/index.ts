import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { registerSchemaResource } from './schema';

export const registerResources = (server: McpServer) => {
  registerSchemaResource(server);
};
