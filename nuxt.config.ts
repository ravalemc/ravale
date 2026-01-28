// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },

  css: ['assets/main.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      Inter: [400, 600, 800]
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
    download: true,
    base64: false,
  },

  app: {
    head: {
      title: 'ravale.net',
      meta: [
        { name: 'description', content: 'The ultimate Skyblock and Prison experience.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
    }
  },
})