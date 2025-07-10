import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { registerGetSpaceCombatLogTool } from './getSpaceCombatLog';
import { registerGetGroundCombatLogTool } from './getGroundCombatLog';
import { registerGetFighterCombatLogTool } from './getFighterCombatLog';

export const registerGetCombatLogsTools = (server: McpServer) => {
  registerGetSpaceCombatLogTool(server);
  registerGetGroundCombatLogTool(server);
  registerGetFighterCombatLogTool(server);
};
