import {Shortcut} from "unocss";
import {Theme} from "../theme/types";

export const buildTextShortcuts = (): Shortcut<Theme> => {
  return [
    /^m-text-(?![^on].*-container$).*/,
    ([shortcut]) => {
      const key = shortcut.replace('m-text-', '')
      return `text-light-${key} dark:text-dark-${key}`
    }
  ]
}
