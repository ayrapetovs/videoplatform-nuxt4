// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      title: 'Платформа',
    },
  },

  googleFonts: {
    display: 'swap',
    families: {
      'Open Sans': {
        wght: '300..800',
        ital: '300..800',
      },
    },
  },

  icon: {
    mode: 'svg',
    aliases: {
      code: 'heroicons:code-bracket-square-solid',
      settings: 'heroicons:cog-6-tooth-solid',
      fire: 'heroicons:fire-solid',
      puzzle: 'heroicons:puzzle-piece-solid',
      airplane: 'heroicons:paper-airplane-solid',
      bars: 'heroicons:bars-3-solid',
      close: 'heroicons:x-mark-solid'
    }
  },
  modules: ['@nuxtjs/google-fonts', '@nuxt/icon'],
})
