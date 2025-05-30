import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { getDb } from '../db';

export interface Game {
  GameID: number;
  GameName: string;
  GameTime: string;
  StartYear: number;
}

export interface Race {
  RaceID: number;
  RaceName: string;
}

export interface GameWithRaces extends Game {
  playerRaces: Race[];
}

export const registerGamesResource = (server: McpServer) => {
  server.resource('games', 'games://list', async (uri) => {
    const db = getDb();
    try {
      const games = db
        .prepare(
          'SELECT GameID, GameName, GameTime, StartYear FROM FCT_Game ORDER BY GameID'
        )
        .all() as Game[];

      // Get player races for each game
      const gamesWithRaces = games.map((game) => {
        const playerRaces = db
          .prepare(
            'SELECT RaceID, RaceName FROM FCT_Race WHERE GameID = ? AND NPR = 0'
          )
          .all(game.GameID) as Race[];

        return {
          ...game,
          playerRaces,
        };
      });

      return {
        contents: [
          {
            uri: uri.href,
            text: JSON.stringify(gamesWithRaces, null, 2),
            mimeType: 'application/json',
          },
        ],
      };
    } finally {
      db.close();
    }
  });
};
