import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { placeLog } from './placeLog';

export const placeLogImage = sqliteTable('placeLogImage', {
  id: int().primaryKey({ autoIncrement: true }),
  key: text().notNull(),
  placeLogId: int()
    .notNull()
    .references(() => placeLog.id),
  createdAt: int()
    .notNull()
    .$default(() => Date.now()),
  updatedAt: int()
    .notNull()
    .$default(() => Date.now())
    .$onUpdate(() => Date.now()),
});
