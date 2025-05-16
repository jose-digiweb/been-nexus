<template>
  <UApp>
    <header class="flex items-center justify-between p-4 sm:p-6">
      <NuxtLink to="/" class="uppercase font-bold text-lg mask-x-from-90%"
        >Been Nexus</NuxtLink
      >

      <SignedOut>
        <SignInButton
          mode="modal"
          class="cursor-pointer hover:bg-primary/90 px-4 py-1 rounded-md bg-primary dark:text-slate-950"
        />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  </UApp>
</template>
