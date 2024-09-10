import { argbFromHex, themeFromSourceColor } from '@material/material-color-utilities';
import { definePreset } from 'unocss';
import { buildTextShortcuts } from "./shortcuts/text";
import {buildBackgroundShortcuts} from "./shortcuts/background";
import {buildTheme} from "./theme/defaultTheme";
import {buildCssVar} from "./preflights/cssVar";

const presetMaterial = definePreset(() => {
  const theme = themeFromSourceColor(argbFromHex('#65558F'), [{ name: 'abc', value: argbFromHex('#64458F'), blend: false }])

  // Get the theme from a hex color
  const { light, dark } = theme.schemes
  const themeScheme = buildTheme({light: light.toJSON(), dark: dark.toJSON()})

  return {
    name: 'material-preset',
    shortcuts: [
      buildTextShortcuts(),
      buildBackgroundShortcuts(),
    ],
    theme: {
      colors: themeScheme,
    },
    preflights: [
      ...buildCssVar()
    ]
  }
})

export default presetMaterial
