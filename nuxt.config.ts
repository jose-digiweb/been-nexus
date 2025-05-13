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

  modules: ['nitro-cloudflare-dev', '@nuxt/eslint', '@nuxt/ui', '@logto/nuxt'],

  runtimeConfig: {
    logto: {
      endpoint: process.env.NUXT_LOGTO_ENDPOINT,
      appId: process.env.NUXT_LOGTO_APP_ID,
      appSecret: process.env.NUXT_LOGTO_APP_SECRET,
      cookieEncryptionKey: process.env.NUXT_LOGTO_COOKIE_ENCRYPTION_KEY,
    },
  },
});
