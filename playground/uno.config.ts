// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'
import presetMaterial from 'unocss-preset-material'

export default defineConfig({
  shortcuts: [],
  variants: [],
  theme: {},
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts(),
    presetMaterial()
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  content: {},
})
