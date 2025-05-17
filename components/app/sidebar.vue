<script lang="ts" setup>
import { useSidebarStore } from '~/stores/appStore';

const store = useSidebarStore();
</script>

<template>
  <aside class="bg-accented flex flex-col">
    <div
      class="flex items-center gap-2 justify-between border-b border-bg"
      :class="{
        'p-4 justify-center': store.isSidebarCollapsed,
        'p-4 pr-2': !store.isSidebarCollapsed,
      }"
    >
      <h1 v-if="!store.isSidebarCollapsed" class="font-bold text-lg">
        My Nexus
      </h1>

      <UButton
        square
        size="xs"
        variant="ghost"
        class="cursor-pointer"
        @click="store.toggleSidebarCollapsed()"
      >
        <UIcon
          v-if="store.isSidebarCollapsed"
          name="lucide:chevron-right"
          size="24"
        />
        <UIcon v-else name="lucide:chevron-left" size="24" />
      </UButton>
    </div>

    <AppSideBarNav />
  </aside>
</template>
