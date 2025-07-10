import 'reflect-metadata';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import dotenv from 'dotenv';
import { initDb } from './db';
import { dataSource } from './dataSource/dataSource';
import { registerTools } from './tools';
import { registerResources } from './resources';
import { registerPrompts } from './prompts';
import logger from './utils/logger';

// Load environment variables
dotenv.config();
logger.info('Environment variables loaded');

// Initialize the database
try {
  initDb();
  logger.info('Database initialized successfully');
} catch (error) {
  logger.error('Failed to initialize database', error);
  process.exit(1);
}

// Initialize the data source
try {
  dataSource.initialize();
  logger.info('Data source initialized successfully');
} catch (error) {
  logger.error('Failed to initialize data source', error);
  process.exit(1);
}

// Create and configure the server
const server = new McpServer({
  name: 'aurora-4x-mcp',
  version: '1.0.0',
});
logger.info('MCP Server created');

// Register all resources and tools
try {
  registerResources(server);
  logger.info('Resources registered successfully');

  registerTools(server);
  logger.info('Tools registered successfully');

  registerPrompts(server);
  logger.info('Prompts registered successfully');
} catch (error) {
  logger.error('Failed to register server components', error);
  process.exit(1);
}

// Connect the server
const transport = new StdioServerTransport();
try {
  server.connect(transport);
  logger.info('Server connected successfully');
} catch (error) {
  logger.error('Failed to connect server', error);
  process.exit(1);
}
