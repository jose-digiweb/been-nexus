import { place } from '~/server/lib/db/schemas';
import { eq } from 'drizzle-orm';
import getDB from '../lib/db';

export default defineEventHandler(async event => {
  const auth = event.context.auth();

  if (!auth.userId) {
    return sendError(
      event,
      createError({
        status: 401,
        statusMessage: 'Unauthorized',
        data: {
          message: 'You must be logged in to view places',
        },
      })
    );
  }

  const db = getDB(event.context.cloudflare.env.DB);

  const results = await db
    .select()
    .from(place)
    .where(eq(place.userId, auth.userId))
    .all();

  return {
    status: 200,
    data: results,
  };
});
