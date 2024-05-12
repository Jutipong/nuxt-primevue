export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt PrimeVue',
      link: [
        // {
        //   id: 'theme-css',
        //   rel: 'stylesheet',
        //   type: 'text/css',
        //   href: '/themes/aura-light-blue/theme.css',
        // },
      ],
    },
  },
  // typescript: {
  //   typeCheck: true
  // },
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', 'nuxt-primevue'],
  primevue: {
    usePrimeVue: true,
    options: {
      ripple: true,
    },
  },
  css: ['primevue/resources/themes/aura-light-blue/theme.css'],
})
