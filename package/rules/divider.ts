import { Rule } from "unocss";
import { UNIT } from "../constants/unit";
import { Theme } from "../theme/types";

export const buildDivider = (): Rule<Theme>[] => {
  return [
    // Horizontal divider
    [
      new RegExp(`^m-divider(-\\d+(${UNIT}))?$`),
      ([, w], { theme }) => ({
        width: w ? `${w.replace('-', '')}` : '100%',
        height: '1px',
        margin: '1rem auto',
        background: theme.colors.outlineVariant
      })
    ],
    [
      /^m-divider(-middle)?-inset/,
      ([, isMiddle], { theme }) => ({
        width: `calc(100% - ${ isMiddle ? '32px' : '16px' })`,
        height: '1px',
        margin: '1rem auto',
        background: theme.colors.outlineVariant
      })
    ],
    // Vertical divider
    [
      new RegExp(`^m-divider-vertical(-\\d+(${UNIT}))?$`),
      ([, h], { theme }) => ({
        position: 'relative',
        top: '50%',
        display: 'inline-block',
        width: '1px',
        'min-height': '1rem',
        height: h ? `${h.replace('-', '')}` : '100%',
        margin: '0 1rem',
        transform: 'translateY(-50%)',
        'vertical-align': 'top',
        background: theme.colors.outlineVariant
      })
    ],
    [
      /^m-divider-vertical(-middle)?-inset/,
      ([, isMiddle], { theme }) => ({
        position: 'relative',
        top: '50%',
        display: 'inline-block',
        width: '1px',
        'min-height': '1rem',
        height: `calc(100% - ${ isMiddle ? '32px' : '16px' })`,
        margin: '0 1rem',
        transform: 'translateY(-50%)',
        'vertical-align': 'top',
        background: theme.colors.outlineVariant
      })
    ],
  ]
}
