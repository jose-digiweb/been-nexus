import { insertLocationSchema, place } from '../lib/db/schemas';
import getDB from '../lib/db';

export default defineEventHandler(async event => {
  const res = await readValidatedBody(event, insertLocationSchema.safeParse);

  if (!res.success) {
    return sendError(
      event,
      createError({
        status: 422,
        statusMessage: 'Invalid data',
        data: res.error.issues.reduce<Record<string, string>>(
          (errors, issue) => {
            errors[issue.path.join('')] = issue.message;

            return errors;
          },
          {}
        ),
      })
    );
  }

  const auth = event.context.auth();

  if (!auth.userId) {
    return sendError(
      event,
      createError({
        status: 401,
        statusMessage: 'Unauthorized',
        data: {
          message: 'You must be logged in to create a place',
        },
      })
    );
  }

  const db = getDB(event.context.cloudflare.env.DB);

  const inserted = await db
    .insert(place)
    .values({
      ...res.data,
      userId: auth.userId,
      slug: res.data.name.toLowerCase().replaceAll(' ', '-'),
    })
    .returning();

  return inserted[0] || [];
});
