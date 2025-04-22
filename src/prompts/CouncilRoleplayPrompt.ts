import { getDb } from '../db';
import { Database } from 'better-sqlite3';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { z } from 'zod';

interface Commander {
  CommanderID: number;
  Name: string;
  Title: string;
  RankTitle: string;
  CommanderType: number;
  Seniority: number;
  Loyalty: number;
  KillTonnageMilitary: number;
  KillTonnageCommercial: number;
  PromotionScore: number;
}

interface CommanderTrait {
  CmdrID: number;
  TraitName: string;
  TraitDescription: string;
}

interface CommanderInfo {
  id: number;
  name: string;
  title: string;
  rank: string;
  commandType: number;
  seniority: number;
  traits: string[];
  loyalty: number;
  experience: {
    militaryKills: number;
    commercialKills: number;
    promotionScore: number;
  };
}

interface RoleplayContext {
  gameId: number;
  raceId: number;
  playerTitle: string;
  commanders: {
    naval: CommanderInfo[];
    ground: CommanderInfo[];
    science: CommanderInfo[];
    admin: CommanderInfo[];
  };
  currentDate: string;
}

interface DbCommander extends Commander {
  RankTitle: string;
}

async function getHighestRankingCommanders(
  gameId: number,
  raceId: number
): Promise<RoleplayContext['commanders']> {
  const db = (await getDb()) as Database;
  try {
    // Query for Naval commanders (Type 0)
    const navalQuery = `
      SELECT c.*, COALESCE(r.RankName, '') as RankTitle
      FROM FCT_Commander c
      LEFT JOIN FCT_Ranks r ON c.RankID = r.RankID AND r.RankType = 0
      WHERE c.GameID = ? 
      AND c.RaceID = ?
      AND c.CommanderType = 0
      AND c.Deceased = false
      AND c.RetireStatus = 0
      ORDER BY r.Priority ASC, c.Seniority DESC, c.PromotionScore DESC
      LIMIT 1;
    `;

    // Query for Ground commanders (Type 1)
    const groundQuery = `
      SELECT c.*, COALESCE(r.RankName, '') as RankTitle
      FROM FCT_Commander c
      LEFT JOIN FCT_Ranks r ON c.RankID = r.RankID AND r.RankType = 1
      WHERE c.GameID = ? 
      AND c.RaceID = ?
      AND c.CommanderType = 1
      AND c.Deceased = false
      AND c.RetireStatus = 0
      ORDER BY r.Priority ASC, c.Seniority DESC, c.PromotionScore DESC
      LIMIT 1;
    `;

    // Query for Science commanders (Type 2) - no ranks, just seniority
    const scienceQuery = `
      SELECT c.*, '' as RankTitle
      FROM FCT_Commander c
      WHERE c.GameID = ? 
      AND c.RaceID = ?
      AND c.CommanderType = 2
      AND c.Deceased = false
      AND c.RetireStatus = 0
      ORDER BY c.Seniority DESC, c.PromotionScore DESC
      LIMIT 1;
    `;

    // Query for Administrative commanders (Type 3) - no ranks, just seniority
    const adminQuery = `
      SELECT c.*, '' as RankTitle
      FROM FCT_Commander c
      WHERE c.GameID = ? 
      AND c.RaceID = ?
      AND c.CommanderType = 3
      AND c.Deceased = false
      AND c.RetireStatus = 0
      ORDER BY c.Seniority DESC, c.PromotionScore DESC
      LIMIT 1;
    `;

    const naval = db.prepare(navalQuery).get(gameId, raceId) as DbCommander;
    const ground = db.prepare(groundQuery).get(gameId, raceId) as DbCommander;
    const science = db.prepare(scienceQuery).get(gameId, raceId) as DbCommander;
    const admin = db.prepare(adminQuery).get(gameId, raceId) as DbCommander;

    // Get traits for each commander
    const traitsQuery = `
      SELECT ct.CmdrID, t.Name as TraitName
      FROM FCT_CommanderTraits ct
      JOIN DIM_TraitsList t ON ct.TraitID = t.TraitID
      WHERE ct.GameID = ? AND ct.CmdrID IN (?, ?, ?, ?)
    `;

    const traits = db
      .prepare(traitsQuery)
      .all(
        gameId,
        naval?.CommanderID || 0,
        ground?.CommanderID || 0,
        science?.CommanderID || 0,
        admin?.CommanderID || 0
      ) as CommanderTrait[];

    const result: RoleplayContext['commanders'] = {
      naval: [],
      ground: [],
      science: [],
      admin: [],
    };

    // Helper function to convert commander data to CommanderInfo
    const toCommanderInfo = (
      commander: DbCommander | null
    ): CommanderInfo | null => {
      if (!commander) return null;

      const commanderTraits = traits
        .filter((t) => t.CmdrID === commander.CommanderID)
        .map((t) => t.TraitName);

      return {
        id: commander.CommanderID,
        name: commander.Name,
        title: commander.Title || commander.RankTitle,
        rank: commander.RankTitle,
        commandType: commander.CommanderType,
        seniority: commander.Seniority,
        traits: commanderTraits,
        loyalty: commander.Loyalty,
        experience: {
          militaryKills: commander.KillTonnageMilitary,
          commercialKills: commander.KillTonnageCommercial,
          promotionScore: commander.PromotionScore,
        },
      };
    };

    // Add commanders to result if they exist
    const navalInfo = toCommanderInfo(naval);
    const groundInfo = toCommanderInfo(ground);
    const scienceInfo = toCommanderInfo(science);
    const adminInfo = toCommanderInfo(admin);

    if (navalInfo) result.naval.push(navalInfo);
    if (groundInfo) result.ground.push(groundInfo);
    if (scienceInfo) result.science.push(scienceInfo);
    if (adminInfo) result.admin.push(adminInfo);

    return result;
  } finally {
    db.close();
  }
}

export const registerCouncilRoleplayPrompt = (server: McpServer) => {
  server.prompt(
    'council-roleplay',
    "Engage in character-driven conversations with your empire's highest-ranking military, scientific, and administrative leaders",
    {
      raceId: z.string(),
      gameId: z.string(),
      playerTitle: z.string().optional(),
      initialPrompt: z.string().optional(),
    },
    async ({ gameId, raceId, playerTitle, initialPrompt }) => {
      const commanders = await getHighestRankingCommanders(
        parseInt(gameId),
        parseInt(raceId)
      );

      return {
        messages: [
          {
            role: 'assistant',
            content: {
              type: 'text',
              text: `You are an AI roleplaying assistant for Aurora 4X. You will help facilitate a conversation between the player (${
                playerTitle || 'Imperial Regent'
              }) and their empire's highest-ranking officials.

Available Leaders:
${Object.entries(commanders)
  .map(([type, cmdrs]) => {
    if (cmdrs.length === 0) return '';
    const cmdr = cmdrs[0];
    return `
${type.toUpperCase()} COMMAND:
${cmdr.title} ${cmdr.name}
Rank: ${cmdr.rank}
Notable Traits: ${cmdr.traits.join(', ')}
`;
  })
  .join('\n')}

Guidelines:
1. Each response should be in-character from one of the leaders or a combination of them
2. Use the leaders' traits and experience to influence their personality and responses
3. Reference actual game data when discussing military matters, scientific research, or administration
4. Maintain appropriate military/administrative protocol and formality
5. Leaders should occasionally disagree or have conflicting viewpoints based on their roles and traits
6. Include relevant title and name when a leader speaks
7. Format responses as either:
   - Direct dialogue: "[Title] [Name]: Message"
   - Written reports: "FROM: [Title] [Name]\\nTO: [PlayerTitle]\\nRE: Subject\\n\\nContent"`,
            },
          },
          {
            role: 'user',
            content: {
              type: 'text',
              text: initialPrompt || 'What is the current state of affairs?',
            },
          },
        ],
        description: 'Empire Leadership Roleplay',
      };
    }
  );
};
