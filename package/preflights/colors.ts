import { argbFromHex, rgbaFromArgb, themeFromSourceColor } from "@material/material-color-utilities";
import { Preflight } from "unocss";
import { Theme, ThemeColors } from "../theme/types";
import { covertToKebabCase } from "../utils/utils";

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
        const {r: lr, g: lg, b: lb} = rgbaFromArgb(value)
        const {r: dr, g: dg, b: db} = rgbaFromArgb(mdThemeDark[key])

        const kebabCaseKey = covertToKebabCase(key)

        light[kebabCaseKey] = [lr, lg, lb].join(',')
        dark[kebabCaseKey] = [dr, dg, db].join(',')
      }
      const lightColorVars = Object.entries(light).map(item => `--md-color-${item[0]}: ${item[1]}`).join(';')
      const darkColorVars = Object.entries(dark).map(item => `--md-color-${item[0]}: ${item[1]}`).join(';')

      return `
        :root {
          ${ lightColorVars }
        }
        @media (prefers-color-scheme: dark) {
          :root {
            ${ darkColorVars }
          }
        }
        .dark {
          ${ darkColorVars }
        }
        html[data-theme="dark"] {
          ${ darkColorVars }
        }
      `
    }
  }
}
