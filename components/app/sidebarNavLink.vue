<script lang="ts" setup>
import { useSidebarStore } from '~/stores/appStore';

const store = useSidebarStore();

type Props = {
  to: string;
  icon: string;
  label: string;
};
const props = defineProps<Props>();

const route = useRoute();

const path = computed(() => route.path);
</script>

<template>
  <NuxtLink
    :to="props.to"
    class="flex items-center p-4 hover:bg-secondary/10"
    :class="{
      'bg-secondary/20': path === props.to,
      'justify-center': store.isSidebarCollapsed,
    }"
  >
    <UIcon
      :name="props.icon"
      size="22"
      :class="{ 'mr-2': !store.isSidebarCollapsed }"
    />
    <span v-if="!store.isSidebarCollapsed">{{ props.label }}</span>
  </NuxtLink>
</template>
