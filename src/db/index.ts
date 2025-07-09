import Database from 'better-sqlite3';
import path from 'path';
import { logger } from '../utils/logger';
// Helper to create DB connection
export const getDb = () => {
  const dbPath = path.join(process.cwd(), 'data', 'AuroraDB.db');
  return new Database(dbPath, { verbose: logger.info });
};

// Initialize database
export const initDb = () => {
  const db = getDb();
  try {
    // Enable foreign keys
    db.pragma('foreign_keys = ON');
  } finally {
    db.close();
  }
};
