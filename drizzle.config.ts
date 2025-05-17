import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'sqlite',
  casing: 'snake_case',
  out: 'server/lib/db/migrations',
  schema: 'server/lib/db/schemas/index.ts',
});
