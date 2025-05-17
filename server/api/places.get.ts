import { place } from '~/server/lib/db/schemas';
import getDB from '../lib/db';

export default defineEventHandler(async event => {
  const db = getDB(event.context.cloudflare.env.DB);

  const results = await db.select().from(place).all();

  return {
    status: 200,
    data: results,
  };
});
