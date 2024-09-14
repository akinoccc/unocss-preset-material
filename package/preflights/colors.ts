import {Preflight} from "unocss";
import {Theme, ThemeColors} from "../theme/types";
import {argbFromHex, hexFromArgb, themeFromSourceColor} from "@material/material-color-utilities";
import {covertToKebabCase} from "../utils";

export const buildColorCssVar = (): Preflight<Theme> => {
  return {
    getCSS: () => {
      const {light: sourceThemeLight, dark: sourceThemeDark} = themeFromSourceColor(
        argbFromHex('#65558F'),
        [
          { name: 'abc', value: argbFromHex('#64458F'),
            blend: false
          }
          ]).schemes

      const mdThemeLight: Record<string, number> = sourceThemeLight.toJSON()
      const mdThemeDark: Record<string, number> = sourceThemeDark.toJSON()

      const light = {} as ThemeColors
      const dark = {} as ThemeColors
      for (const [key, value] of Object.entries(mdThemeLight)) {
        const kebabCaseKey = covertToKebabCase(key)
        const lightValue = hexFromArgb(value)
        const darkValue = hexFromArgb(mdThemeDark[key])
        light[kebabCaseKey] = lightValue
        dark[kebabCaseKey] = darkValue
        light[key] = lightValue
        dark[key] = darkValue
      }
      const lightColorVars = Object.entries(light).map(item => `--md-color-${item[0]}: ${item[1]}`)
      const darkColorVars = Object.entries(dark).map(item => `--md-color-${item[0]}: ${item[1]}`)

      return `
        * {
          ${ lightColorVars.join(';') }
        }
        @media (prefers-color-scheme: dark) {
          * {
            ${ darkColorVars.join(';') }
          }
        }
      `
    }
  }
}
