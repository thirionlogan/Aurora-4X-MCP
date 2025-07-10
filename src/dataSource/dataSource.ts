import { DataSource } from 'typeorm';
import * as entities from '../entity';

export const dataSource = new DataSource({
  type: 'better-sqlite3',
  database: 'data/AuroraDB.db',
  entities: entities,
  synchronize: false,
  logging: false,
});
