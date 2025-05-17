import { clerkMiddleware } from '@clerk/nuxt/server';

export default clerkMiddleware(event => {
  const { userId } = event.context.auth();
  const isAdminRoute = event.path.startsWith('/places');

  if (!userId && isAdminRoute) {
    return sendRedirect(event, '/');
  }
});
