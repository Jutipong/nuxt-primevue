import antfu from '@antfu/eslint-config'

export default antfu(
    {
        vue: true,
        typescript: true,

        stylistic: {
            indent: 4,
            quotes: 'single',
            semi: false,
            overrides: {
                'no-console': 'off',
                // 'no-debugger': false,
                // 'valid-v-slot': 1,
            },
        },
        rules: {
            'vue/valid-v-slot': ['error', { allowModifiers: true }],
        },
        ignores: [
            '**/fixtures',
        ],
        formatters: {
            css: true,
            html: true,
            markdown: 'prettier',
        },
    },
)
