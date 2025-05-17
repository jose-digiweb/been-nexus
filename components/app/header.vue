<template>
  <header
    class="flex items-center justify-between h-18 shrink-0 container mx-auto border-b border-slate-500/50"
  >
    <NuxtLink to="/" class="uppercase font-bold text-lg mask-x-from-90%"
      >Been Nexus</NuxtLink
    >

    <div class="flex items-center gap-4">
      <AppThemeToggle />

      <SignedOut>
        <SignInButton
          mode="modal"
          class="cursor-pointer hover:bg-primary/90 px-4 py-1 rounded-md bg-primary dark:text-slate-950"
        />
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  </header>
</template>
