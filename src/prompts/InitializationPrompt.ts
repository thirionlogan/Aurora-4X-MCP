import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { getDb } from '../db';
import { GameWithRaces } from '../resources/games';
import { convertAuroraDateTime } from '../utils/dateUtils';

export interface IInitializationPromptConfig {
  systemPrompt: string;
  initialContext: string;
}

const defaultConfig: IInitializationPromptConfig = {
  systemPrompt: `You are an AI assistant specialized in Aurora 4X, a complex 4X space strategy game. You have access to game data through the MCP server and can help players analyze their game state, make strategic decisions, and understand game mechanics.

Key responsibilities:
1. Provide accurate game information by querying the database
2. Help interpret game data and statistics
3. Offer strategic advice based on current game state
4. Explain game mechanics and systems
5. Assist with resource management and planning

Please format responses clearly and use appropriate data visualization when relevant.`,

  initialContext: `I am connected to your Aurora 4X game through the MCP server and can access your game data. First, let me help you select your game.`,
};

export const registerInitializationPrompt = (
  server: McpServer,
  config: Partial<IInitializationPromptConfig> = {}
) => {
  const finalConfig = { ...defaultConfig, ...config };

  server.prompt('initialization', async () => {
    const db = getDb();
    try {
      // Get games with player races
      const games = db
        .prepare(
          'SELECT GameID, GameName, GameTime, StartYear FROM FCT_Game ORDER BY GameID'
        )
        .all() as GameWithRaces[];

      // Get player races for each game
      const gamesWithRaces = games.map((game) => {
        const playerRaces = db
          .prepare(
            'SELECT RaceID, RaceName FROM FCT_Race WHERE GameID = ? AND NPR = 0'
          )
          .all(game.GameID) as { RaceID: number; RaceName: string }[];

        return {
          ...game,
          playerRaces,
        };
      });

      // Create game selection message
      const gamesList = gamesWithRaces
        .map((game) => {
          const races = game.playerRaces
            .map((race) => `    - ${race.RaceName} (Race ID: ${race.RaceID})`)
            .join('\n');
          const formattedTime = convertAuroraDateTime(
            Number(game.GameTime),
            game.StartYear
          ).formatted;
          return `Game "${game.GameName}" (ID: ${game.GameID}):
  Time: ${formattedTime}
  Start Year: ${game.StartYear}
  Player Races:\n${races}`;
        })
        .join('\n\n');

      const selectionPrompt = `Available games:\n\n${gamesList}\n\nPlease let me know which game and race you'd like to use by providing the Game ID and Race ID. For example: "I want to use Game ID 1 with Race ID 2".`;

      return {
        messages: [
          {
            role: 'assistant',
            content: {
              type: 'text',
              text: finalConfig.systemPrompt,
            },
          },
          {
            role: 'assistant',
            content: {
              type: 'text',
              text: finalConfig.initialContext + '\n\n' + selectionPrompt,
            },
          },
        ],
      };
    } finally {
      db.close();
    }
  });
};
