<script lang="ts" setup>
const { signIn, signOut, data } = useAuth();
</script>

<template>
  <UApp>
    <div class="flex items-center justify-between p-4">
      <h1>Been Nexus</h1>

      <div class="flex items-center">
        <UDropdownMenu
          v-if="data?.user"
          :items="[
            {
              label: 'Sign out',
              icon: 'lucide-logout',
              onSelect: () => signOut(),
            },
          ]"
        >
          <UAvatar v-if="data.user?.image" :src="data.user.image" />
          <UAvatar v-else icon="lucide-user-round" />
        </UDropdownMenu>

        <UButton v-else @click="signIn('github')">Sign in</UButton>
      </div>
    </div>
  </UApp>
</template>
