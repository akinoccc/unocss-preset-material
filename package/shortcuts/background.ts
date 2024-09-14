import {Shortcut} from "unocss";
import {Theme} from "../theme/types";

export const buildBackgroundShortcuts = (): Shortcut<Theme> => {
  return [
    /^m-bg-(?!.*(shadow|outline|outlineVariant)).*$/,
    ([shortcut]) => {
      const key = shortcut.replace('m-bg-', '')
      return `bg-light-${key} dark:bg-dark-${key}`
    }
  ]
}
