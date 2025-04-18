import Database from 'better-sqlite3';
import path from 'path';

// Helper to create DB connection
export const getDb = () => {
  const dbPath = path.join(process.cwd(), 'data', 'AuroraDB.db');
  return new Database(dbPath);
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
