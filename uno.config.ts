// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: {
    grid: 'flex flex-wrap mr-0 ml-0 mt--0.5rem',
    row: 'flex flex-wrap mr-0 ml-0 mt--0.5rem',
  },
  rules: [
    [/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) / 4}rem` })],
    [/^p-(\d+)$/, match => ({ padding: `${Number(match[1]) / 4}rem` })],

    [/^col$/, () => ({ flexGrow: 1, flexBasis: 0 })],
    [/^col-auto$/, () => ({ flex: '0 0 auto' })],

    [/^col-(\d+)$/, ([, d]) => ({ flex: '0 0 auto', padding: '0.5rem', width: `${(Number(d) / 12) * 100}%` })],
    // [/^md:col-(\d+)$/, ([, d]) => ({ flex: '0 0 auto', padding: '0.5rem', width: `${(Number(d) / 12) * 100}%` })],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
