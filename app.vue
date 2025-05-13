<script lang="ts" setup>
const { loggedIn, user } = useAuth();

console.log({
  loggedIn,
  user,
});
</script>

<template>
  <UApp>
    <div class="flex items-center justify-between p-4">
      <h1>Been Nexus</h1>

      <div class="flex items-center">
        <div v-if="loggedIn && user" class="flex items-center gap-2">
          <h2>Welcome back, {{ user.given_name }}</h2>
          <UIcon name="lucide-minus" />
          <NuxtLink to="/api/logout" external>Sign out</NuxtLink>
        </div>

        <NuxtLink v-else to="/api/login" external>Sign in</NuxtLink>
      </div>
    </div>
  </UApp>
</template>
