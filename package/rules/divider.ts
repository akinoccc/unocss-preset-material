import {Rule} from "unocss";
import {UNIT} from "../constants/unit";

export const buildDivider = (): Rule[] => {
  return [
    // Horizontal divider
    [
      new RegExp(`^m-divider(-\\d+(${UNIT}))?$`),
      ([, w]) => ({
        width: w ? `${w.replace('-', '')}` : '100%',
        height: '1px',
        margin: '1rem auto',
        background: 'var(--md-color-outline-variant)'
      })
    ],
    [
      /^m-divider(-middle)?-inset/,
      ([, isMiddle]) => ({
        width: `calc(100% - ${ isMiddle ? '32px' : '16px' })`,
        height: '1px',
        margin: '1rem auto',
        background: 'var(--md-color-outline-variant)'
      })
    ],
    // Vertical divider
    [
      new RegExp(`^m-divider-vertical(-\\d+(${UNIT}))?$`),
      ([, h]) => ({
        position: 'relative',
        top: '50%',
        display: 'inline-block',
        width: '1px',
        'min-height': '1rem',
        height: h ? `${h.replace('-', '')}` : '100%',
        margin: '0 1rem',
        transform: 'translateY(-50%)',
        'vertical-align': 'top',
        background: `var(--md-color-outline-variant)`
      })
    ],
    [
      /^m-divider-vertical(-middle)?-inset/,
      ([, isMiddle]) => ({
        position: 'relative',
        top: '50%',
        display: 'inline-block',
        width: '1px',
        'min-height': '1rem',
        height: `calc(100% - ${ isMiddle ? '32px' : '16px' })`,
        margin: '0 1rem',
        transform: 'translateY(-50%)',
        'vertical-align': 'top',
        background: 'var(--md-color-outline-variant)'
      })
    ],
  ]
}
