export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt PrimeVue',
      link: [
        {
          id: 'theme-css',
          rel: 'stylesheet',
          type: 'text/css',
          href: '/themes/aura-light-blue/theme.css'
        }
      ]
    }
  },
  // typescript: {
  //   typeCheck: true
  // },
  devtools: { enabled: true },
  modules: ['nuxt-primevue'],
  primevue: {
    options: { ripple: true },
    components: {
      exclude: ['Editor', 'ColorPicker', 'Galleria']
    },
  },
  css: ['primeicons/primeicons.css', 'primeflex/primeflex.scss', 'primevue/resources/primevue.min.css', '@/assets/styles.scss']
})
