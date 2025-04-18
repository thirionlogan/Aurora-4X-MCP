import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { registerQueryTool } from './query';
import { registerGetCurrentDateTool } from './getCurrentDate';
import { registerGetEmpireResourcesTool } from './getEmpireResources';
import { registerGetEmpireMineralsTool } from './getEmpireMinerals';
import { registerGetEmpireFleetTool } from './getEmpireFleet';
import { registerGetEmpireWealthTool } from './getEmpireWealth';
import { registerGetEmpireFuelTool } from './getEmpireFuel';

export const registerTools = (server: McpServer) => {
  registerQueryTool(server);
  registerGetCurrentDateTool(server);
  registerGetEmpireResourcesTool(server);
  registerGetEmpireMineralsTool(server);
  registerGetEmpireFleetTool(server);
  registerGetEmpireWealthTool(server);
  registerGetEmpireFuelTool(server);
};
