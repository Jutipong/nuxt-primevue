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
  shortcuts: [
  ],
  rules: [
    [/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) / 4}rem` })],
    [/^p-(\d+)$/, match => ({ padding: `${Number(match[1]) / 4}rem` })],
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