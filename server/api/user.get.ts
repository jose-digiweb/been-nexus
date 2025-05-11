import { drizzle } from 'drizzle-orm/d1';
import { user } from '~/lib/db/schemas';

export default defineEventHandler(async event => {
  const db = drizzle(event.context.cloudflare.env.DB);

  const results = await db.select().from(user).all();

  return {
    status: 200,
    data: results,
  };
});
