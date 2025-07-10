import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { registerQueryTool } from './query';
import { registerSchemaTools } from './schema';
import { registerGetCurrentDateTool } from './getCurrentDate';
import { registerGetEmpireFleetTool } from './getEmpireFleet';
import { registerGetEmpirePopulationTool } from './getEmpirePopulation';
import { registerSystemConnectionsTool } from './SystemConnectionsTool';
import { registerGetCombatLogsTools } from './getCombatLogs';
import { registerGetEmpireLogisticsTools } from './getEmpireLogistics';

export const registerTools = (server: McpServer) => {
  registerQueryTool(server);
  registerSchemaTools(server);
  registerGetCurrentDateTool(server);
  registerGetEmpireFleetTool(server);
  registerGetEmpirePopulationTool(server);
  registerGetCombatLogsTools(server);
  registerGetEmpireLogisticsTools(server);
  registerSystemConnectionsTool(server);
};
