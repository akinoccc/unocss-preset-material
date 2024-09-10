import {covertToKebabCase} from "../utils";
import {hexFromArgb} from "@material/material-color-utilities";
import {Variant} from "../types/theme";

export const buildTheme = (sourceTheme: { light: Record<keyof Variant, number>, dark: Record<keyof Variant, number> }) => {
  const light = {} as Variant
  const dark = {} as Variant
  for (const [key, value] of Object.entries(sourceTheme.light)) {
    const kebabCaseKey = covertToKebabCase(key)
    const lightValue = hexFromArgb(value)
    const darkValue = hexFromArgb(sourceTheme.dark[key])
    light[kebabCaseKey] = lightValue
    dark[kebabCaseKey] = darkValue
    light[key] = lightValue
    dark[key] = darkValue
  }
  return {
    light,
    dark,
  }
}
