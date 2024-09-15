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
  shortcuts: [
    {
      'fc': 'flex justify-center items-center',
      'fac': 'flex items-center',
      'fjc': 'flex justify-center',
      'fvc': 'flex items-center',
      'fvjc': 'flex items-center justify-center',
    }
  ],
  variants: [],
  theme: {
    colors: {
      brand: {
        DEFAULT: '#65558F',
        dark: '#65558F',
        light: '#65558F',
      },
    },

  },
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
