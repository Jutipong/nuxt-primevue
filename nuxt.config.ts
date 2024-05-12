export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt PrimeVue',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          id: 'theme-css',
          rel: 'stylesheet',
          type: 'text/css',
          href: '/themes/aura-light-blue/theme.css',
        },
      ],
    },
  },
  // typescript: {
  //   typeCheck: true
  // },
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue',
    '@unocss/nuxt',
  ],
  primevue: {
    options: { ripple: true },
    components: {
      exclude: ['Editor', 'ColorPicker', 'Galleria', 'Chart'],

    },
  },
  css: [
    'primeicons/primeicons.css',
    'primeflex/primeflex.scss',
    'primevue/resources/primevue.min.css',
    '@/assets/styles.scss',
  ],
  build: {
    transpile: ['nuxt', 'primevue'],
  },
  sourcemap: {
    client: false,
    server: true,
  },
})
