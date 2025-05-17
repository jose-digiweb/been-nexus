<script lang="ts" setup>
import { useSidebarStore } from '~/stores/appStore';

const store = useSidebarStore();
</script>

<template>
  <main
    class="grid lg:grid-cols-[25%_1fr] w-full h-full grow container mx-auto rounded-lg overflow-hidden"
    :class="{
      'grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr]': store.isSidebarCollapsed,
      'grid-cols-[30%_1fr]': !store.isSidebarCollapsed,
    }"
  >
    <AppSidebar />

    <div class="bg-accented/40 flex flex-col p-4">
      <NuxtPage />
    </div>
  </main>
</template>
