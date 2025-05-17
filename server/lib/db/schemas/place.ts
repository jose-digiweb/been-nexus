import { int, real, sqliteTable, text } from 'drizzle-orm/sqlite-core';

import { createInsertSchema } from 'drizzle-zod';

export const place = sqliteTable('place', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  slug: text().notNull().unique(),
  description: text(),
  lat: real().notNull(),
  long: real().notNull(),
  userId: text().notNull(),
  createdAt: int()
    .notNull()
    .$default(() => Date.now()),
  updatedAt: int()
    .notNull()
    .$default(() => Date.now())
    .$onUpdate(() => Date.now()),
});

export const insertLocationSchema = createInsertSchema(place, {
  name: field =>
    field
      .min(2, {
        message: 'Name must be at least 2 characters long',
      })
      .max(50, {
        message: 'Name must be at most 50 characters long',
      }),
  lat: field =>
    field
      .min(-90, {
        message: 'Latitude must be at least -90 degrees',
      })
      .max(90, {
        message: 'Latitude must be at most 90 degrees',
      }),
  long: field =>
    field
      .min(-180, {
        message: 'Longitude must be at least -180 degrees',
      })
      .max(180, {
        message: 'Longitude must be at most 180 degrees',
      }),
}).omit({
  id: true,
  slug: true,
  userId: true,
  createdAt: true,
  updatedAt: true,
});
