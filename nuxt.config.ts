// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  modules: [
    '@nuxtjs/tailwindcss',
    '@tresjs/nuxt'
  ],
  app: {
    head: {
      title: 'Kristiawan Devianto — Portfolio',
      meta: [
        { name: 'description', content: 'Embedded Software Engineer • AI/Robotics • Nuxt Portfolio' }
      ]
    }
  }
})
