import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'sqlite',
  out: 'lib/db/migrations',
  schema: 'lib/db/schemas/index.ts',
});
