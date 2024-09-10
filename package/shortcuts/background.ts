import {Shortcut} from "unocss";
import {ThemeScheme} from "../types/theme";

export const buildBackgroundShortcuts = (): Shortcut<Record<string, ThemeScheme>> => {
  return [
    /^m-bg-(?!.*(shadow|outline|outlineVariant)).*$/,
    ([shortcut]) => {
      const key = shortcut.replace('m-bg-', '')
      return `bg-light-${key} dark:bg-dark-${key}`
    }
  ]
}
