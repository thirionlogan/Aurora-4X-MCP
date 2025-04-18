import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { getDb } from '../db';

export interface Game {
  GameID: number;
  GameName: string;
  GameTime: string;
  StartYear: number;
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

      return {
        contents: [
          {
            uri: uri.href,
            text: JSON.stringify(games, null, 2),
            mimeType: 'application/json',
          },
        ],
      };
    } finally {
      db.close();
    }
  });
};
