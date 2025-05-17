export default defineNuxtRouteMiddleware(to => {
  const auth = useAuth();

  if (!auth.isSignedIn.value && to.path.startsWith('/places')) {
    return navigateTo('/');
  }
});
