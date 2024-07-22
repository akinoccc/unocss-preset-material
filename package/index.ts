import { argbFromHex, hexFromArgb, themeFromSourceColor } from '@material/material-color-utilities';
import { definePreset, Shortcut } from 'unocss';
import { covertToKebabCase, keys } from './utils';

interface Variant extends Record<string, string> {
  primary: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
  outlineVariant: string;
  shadow: string;
  scrim: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
}

interface ThemeScheme {
  light: Variant;
  dark: Variant;
}

interface ColorScheme {
  name: string;
  label: string;
  light: string;
  dark: string;
}

const getTextColorKeys = (colorKeys: string[]) => {
  const containerRegExp = /^(?!on)(\w+)*(container)$/
  const nonTextColorKeys = ['background', 'shadow', 'outline', 'outlineVariant']

  return colorKeys.filter(key => !containerRegExp.test(key) && !nonTextColorKeys.includes(key))
}

const buildColorScheme = (theme: ThemeScheme): ColorScheme[] => {
  const colorKeys = keys(theme.light)
  const colorScheme = [] as ColorScheme[]

  for (const colorKey of colorKeys)
    colorScheme.push({
      name: colorKey,
      label: covertToKebabCase(colorKey),
      light: theme.light[colorKey],
      dark: theme.dark[colorKey],
    })

  return colorScheme
}

const buildTheme = (sourceTheme: { light: Record<keyof Variant, number>, dark: Record<keyof Variant, number> }) => {
  const light = {} as Variant
  const dark = {} as Variant
  for (const [key, value] of Object.entries(sourceTheme.light)) {
    const kebabCaseKey = covertToKebabCase(key)
    light[kebabCaseKey] = hexFromArgb(value)
    dark[kebabCaseKey] = hexFromArgb(sourceTheme.dark[key])
  }
  return {
    light,
    dark,
  }
}

const buildTextShortcuts = (): Shortcut<Record<string, ThemeScheme>> => {
  return [
    /^m-text-(?![^on].*-container$).*/,
    ([shortcut]) => {
      const key = shortcut.replace('m-text-', '')
      return `text-light-${key} dark:text-dark-${key}`
    }
  ]
}

const buildBackgroundShortcuts = (): Shortcut<Record<string, ThemeScheme>> => {
  return [
    /^m-bg-(?!.*(shadow|outline|outlineVariant)).*$/,
    ([shortcut]) => {
      const key = shortcut.replace('m-bg-', '')
      return `bg-light-${key} dark:bg-dark-${key}`
    }
  ]
}

const presetMaterial = definePreset(() => {
  const theme = themeFromSourceColor(argbFromHex('#65558F'), [{ name: 'abc', value: argbFromHex('#64458F'), blend: false }])

  // Get the theme from a hex color
  const { light, dark } = theme.schemes
  const themeScheme = buildTheme({light: light.toJSON(), dark: dark.toJSON()})
  const colorScheme = buildColorScheme(themeScheme)

  return {
    name: 'material-preset',
    shortcuts: [
      buildTextShortcuts(),
      buildBackgroundShortcuts(),
    ],
    theme: {
      colors: themeScheme,
    },
    rules: [],
    variants: [
      // ...
    ],
  }
})

export default presetMaterial
