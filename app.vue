<script setup lang="ts">
const user = useLogtoUser();
</script>

<template>
  <UApp>
    <div class="flex items-center justify-between p-4">
      <h1>Been Nexus</h1>

      <div class="flex items-center gap-4">
        <h2 v-if="user">Hello, {{ user.name }}!</h2>

        <a v-else href="/sign-in">Login</a>
      </div>
    </div>
  </UApp>
</template>
