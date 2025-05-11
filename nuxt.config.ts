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

  runtimeConfig: {
    oauth: {
      github: {
        clientId: process.env.NUXT_OAUTH_GITHUB_CLIENT_ID,
        clientSecret: process.env.NUXT_OAUTH_GITHUB_CLIENT_SECRET,
        redirectURL: process.env.NUXT_OAUTH_GITHUB_REDIRECT_URL,
      },
    },
  },

  modules: [
    'nitro-cloudflare-dev',
    '@nuxt/eslint',
    '@nuxt/ui',
    'nuxt-auth-utils',
  ],
});
