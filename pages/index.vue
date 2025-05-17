<template>
  <main class="flex flex-col h-full grow">
    <div
      class="flex flex-col container mx-auto bg-accented/40 p-4 py-6 rounded-lg min-h-60 sm:min-h-85 md:min-h-96 justify-center items-center text-center"
    >
      <div
        class="flex flex-col items-center max-w-xl md:max-w-2xl text-balance"
      >
        <h1 class="font-semibold text-2xl md:text-4xl">
          Your Journey, Mapped.
        </h1>
        <p class="mt-2">
          With
          <strong>Been Nexus</strong>, you can effortlessly store, manage, and
          explore all the locations that matter to you. From cherished memories
          to future travel dreams, Been Nexus helps you organize your personal
          geography.
        </p>
      </div>

      <div class="flex items-center gap-2 mt-6">
        <SignedIn>
          <NuxtLink
            to="/places"
            class="bg-secondary text-slate-900 px-4 py-2 rounded-lg text-sm md:text-base items-center flex"
          >
            <span class="font-bold">
              <span class="hidden md:inline">Manage</span> Your Places
            </span>

            <UIcon name="lucide:map-pin" size="22" class="ml-2" />
          </NuxtLink>
        </SignedIn>

        <SignedOut>
          <SignInButton
            mode="modal"
            class="px-4 py-2 cursor-pointer rounded-lg bg-primary text-slate-950 hover:bg-primary/90 text-base"
          />
        </SignedOut>
      </div>
    </div>
  </main>
</template>
