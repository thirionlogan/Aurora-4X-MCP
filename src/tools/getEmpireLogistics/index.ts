import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { registerGetEmpireFuelTool } from './getEmpireFuel';
import { registerGetEmpireMineralsTool } from './getEmpireMinerals';
import { registerGetEmpireResourcesTool } from './getEmpireResources';
import { registerGetEmpireWealthTool } from './getEmpireWealth';

export const registerGetEmpireLogisticsTools = (server: McpServer) => {
  registerGetEmpireFuelTool(server);
  registerGetEmpireMineralsTool(server);
  registerGetEmpireResourcesTool(server);
  registerGetEmpireWealthTool(server);
};
