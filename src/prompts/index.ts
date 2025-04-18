import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { registerInitializationPrompt } from './InitializationPrompt';

export const registerPrompts = (server: McpServer) => {
  registerInitializationPrompt(server);
};
