// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  nitro: {
    preset: 'cloudflare-module',

    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },

    experimental: {
      database: true,
    },
  },

  auth: {
    isEnabled: true,
    disableServerSideAuth: false,
    originEnvKey: 'AUTH_ORIGIN',
    sessionRefresh: {
      enablePeriodically: true,
      enableOnWindowFocus: true,
    },
    provider: {
      type: 'authjs',
      trustHost: false,
      defaultProvider: 'github',
      addDefaultCallbackUrl: true,
    },
  },

  runtimeConfig: {
    authSecret: process.env.AUTH_SECRET,
  },

  modules: [
    'nitro-cloudflare-dev',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@sidebase/nuxt-auth',
  ],
});
