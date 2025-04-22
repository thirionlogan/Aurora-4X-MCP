import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { registerInitializationPrompt } from './InitializationPrompt';
import { registerCouncilRoleplayPrompt } from './CouncilRoleplayPrompt';
import { registerMonthlyReportPrompt } from './MonthlyReportPrompt';

export const registerPrompts = (server: McpServer) => {
  registerInitializationPrompt(server);
  registerCouncilRoleplayPrompt(server);
  registerMonthlyReportPrompt(server);
};
