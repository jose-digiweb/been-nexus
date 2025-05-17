import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebarStore', () => {
  const isSidebarCollapsed = ref(false);

  const toggleSidebarCollapsed = () => {
    isSidebarCollapsed.value = !isSidebarCollapsed.value;
  };

  return {
    isSidebarCollapsed,
    toggleSidebarCollapsed,
  };
});
