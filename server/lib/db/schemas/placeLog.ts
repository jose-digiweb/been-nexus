import { int, real, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { place } from './place';

export const placeLog = sqliteTable('placeLog', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text(),
  lat: real().notNull(),
  lng: real().notNull(),
  startedAt: int().notNull(),
  endedAt: int().notNull(),
  userId: text().notNull(),
  placeId: int()
    .notNull()
    .references(() => place.id),
  createdAt: int()
    .notNull()
    .$default(() => Date.now()),
  updatedAt: int()
    .notNull()
    .$default(() => Date.now())
    .$onUpdate(() => Date.now()),
});
