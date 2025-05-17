<template>
  <main
    class="grid lg:grid-cols-[25%_1fr] grid-cols-[30%_1fr] w-full h-full grow container mx-auto rounded-lg overflow-hidden"
  >
    <aside class="bg-accented">
      <div
        class="flex items-center gap-2 p-4 pr-2 justify-between border-b border-bg"
      >
        <h1 class="font-bold text-lg">My Nexus</h1>

        <UButton square size="xs" variant="ghost" class="cursor-pointer">
          <UIcon name="lucide:chevron-left" size="24" />
        </UButton>
      </div>

      <nav class="flex flex-col gap-y-2 p-4">
        <NuxtLink to="/places">Add Place</NuxtLink>
      </nav>
    </aside>

    <div class="bg-accented/40 flex flex-col gap-4 p-4">
      <h1>Places here</h1>
    </div>
  </main>
</template>
