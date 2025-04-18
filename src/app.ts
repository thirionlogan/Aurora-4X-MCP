import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import dotenv from 'dotenv';
import { initDb } from './db';
import { registerTools } from './tools';
import { registerResources } from './resources';

// Load environment variables
dotenv.config();

// Initialize the database
initDb();

// Create and configure the server
const server = new McpServer({
  name: 'aurora-4x-mcp',
  version: '1.0.0',
});

// Register all resources and tools
registerResources(server);
registerTools(server);

// Connect the server
const transport = new StdioServerTransport();
server.connect(transport);
