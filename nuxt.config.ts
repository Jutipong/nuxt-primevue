export default defineNuxtConfig({
    $development: {
        app: {
            head: {
                title: 'DEV',
            },
        },
    },
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
                    id: 'theme',
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: '/themes/aura-light-blue/theme.css',
                },
                {
                    id: 'theme-custom',
                    rel: 'stylesheet',
                    type: 'text/css',
                    href: '/themes/custom.css',
                },
            ],
        },
    },
    // ssr: false,
    // hooks: {
    //     'prerender:routes': async ({ routes }) => {
    //         routes.clear()
    //     },
    // },
    devtools: { enabled: true },
    modules: [
        'nuxt-primevue',
        '@unocss/nuxt',
    ],
    primevue: {
        options: {
            ripple: true,
        },
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
})
