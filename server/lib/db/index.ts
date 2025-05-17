import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schemas';

export default function getDB(db: D1Database) {
  return drizzle(db, {
    schema,
    casing: 'snake_case',
  });
}
