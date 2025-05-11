<script lang="ts" setup>
const { openInPopup } = useUserSession();

const login = () => {
  openInPopup('/api/github');
};
</script>

<template>
  <UApp>
    <AuthState v-slot="{ user, loggedIn, clear }">
      <div class="flex items-center justify-between p-4">
        <h1>Been Nexus</h1>

        <UDropdownMenu
          v-if="loggedIn"
          :items="[
            {
              label: 'Profile',
              icon: 'i-lucide-user',
              to: '/',
            },
            {
              label: 'Logout',
              icon: 'i-lucide-log-out',
              onSelect: clear,
            },
          ]"
        >
          <UAvatar v-if="user" :src="user.avatar" />
        </UDropdownMenu>

        <UButton v-else @click="login">Login</UButton>
      </div>
    </AuthState>
  </UApp>
</template>
