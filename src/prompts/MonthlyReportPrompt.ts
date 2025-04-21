import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';

export interface IMonthlyReportPromptConfig {
  systemPrompt: string;
  initialContext: string;
}

export interface MonthlyReportArguments {
  gameId: number;
  raceId: number;
}

const defaultConfig: IMonthlyReportPromptConfig = {
  systemPrompt: `You are an AI assistant specialized in generating comprehensive monthly reports for Aurora 4X games. Your role is to analyze game data and provide detailed insights about the empire's status and progress.

Key Responsibilities:
1. Generate detailed monthly status reports covering:
   - Economic status and wealth trends
   - Military fleet composition and strength
   - Population growth and distribution
   - Resource and mineral stockpiles
   - Fuel reserves and consumption
   - Recent combat engagements
   - System exploration progress

2. Data Analysis Guidelines:
   - Compare current values with previous periods where relevant
   - Highlight significant changes or developments
   - Identify potential areas of concern
   - Suggest strategic opportunities
   - Provide context for important metrics

3. Report Structure:
   - Start with an executive summary
   - Break down information into clear sections
   - Use bullet points for key metrics
   - Include relevant trends and patterns
   - End with strategic recommendations

4. Tool Usage:
   - Use getCurrentDate to establish the time period
   - Query empire resources, minerals, fleet, wealth, fuel, and population
   - Check combat logs for recent engagements
   - Analyze system connections for exploration progress
   - Format numbers and dates appropriately

Remember to:
- Present information in a clear, organized manner
- Highlight critical information that requires attention
- Provide actionable insights based on the data
- Use appropriate formatting for readability
- Maintain consistent reporting structure`,

  initialContext: `I will help you generate a comprehensive monthly report for your empire. The report will include economic, military, and strategic analysis based on current game data.`,
};

export const registerMonthlyReportPrompt = (
  server: McpServer,
  config: Partial<IMonthlyReportPromptConfig> = {}
) => {
  const finalConfig = { ...defaultConfig, ...config };

  server.prompt(
    'monthly-report',
    'Generate a comprehensive monthly status report for your empire, including economic status, military fleet composition, population growth, resources, combat engagements, and exploration progress.',
    async () => {
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
              text: finalConfig.initialContext,
            },
          },
        ],
        description: 'Monthly Report Generator',
      };
    }
  );
};
