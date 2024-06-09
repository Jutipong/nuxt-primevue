import locale_en from './utils/locale/en'

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
    devtools: { enabled: false },
    imports: {
        dirs: ['types/*.ts', 'types/**/*.ts', 'store/*.ts', 'store/**/*.ts', 'utils/*.ts', 'utils/**/*.ts', 'services/*.ts', 'services/**/*.ts', 'components/*.ts', 'components/**/*.ts', 'layouts/*.ts', 'layouts/**/*.ts', 'pages/*.ts', 'pages/**/*.ts'],
    },
    modules: ['nuxt-primevue', '@unocss/nuxt', 'nuxt-lodash'],
    primevue: {
        options: {
            ripple: true,
            locale: locale_en,
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
