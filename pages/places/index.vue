<script lang="ts" setup>
const { data } = await useAsyncData('places', () => $fetch('/api/places'));

console.log(data.value?.data);

const places = computed(() => data.value?.data);
</script>

<template>
  <div class="flex flex-col">
    <h1 class="mb-6">Places here</h1>

    <div v-for="place in places" :key="place.id">
      <h2>Location: {{ place.name }}</h2>
      <p>Description: {{ place.description }}</p>
    </div>
  </div>
</template>
