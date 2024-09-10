import {Shortcut} from "unocss";
import {ThemeScheme} from "../types/theme";

export const buildTextShortcuts = (): Shortcut<Record<string, ThemeScheme>> => {
  return [
    /^m-text-(?![^on].*-container$).*/,
    ([shortcut]) => {
      const key = shortcut.replace('m-text-', '')
      return `text-light-${key} dark:text-dark-${key}`
    }
  ]
}
