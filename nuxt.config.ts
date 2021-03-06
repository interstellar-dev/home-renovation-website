import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  buildModules: [
    '@nuxt/typescript-build',
    '@pinia/nuxt',
  ],
  runtimeConfig: {
    public: {
      websiteUrl: 'https://homecraftmoscow.ru'
    }
  }
})
