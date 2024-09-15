import { Rule } from "unocss";
import { Theme } from "../theme/types";

export const buildBadge = (): Rule<Theme>[] => {
  return [
    [
      /^m-badge-dot$/,
      () => ({
        width: '6px',
        height: '6px',
        background: 'var(--md-color-error)',
        color: 'var(--md-color-on-error)',
        'border-radius': '50%'
      })
    ],
    [
      /^m-badge$/,
      () => ({
        display: 'inline-flex',
        'justify-content': 'center',
        'align-items': 'center',
        'min-width': '16px',
        height: '16px',
        padding: '4px 8px',
        background: 'var(--md-color-error)',
        color: 'var(--md-color-on-error)',
        'border-radius': '16px',
      })
    ],
    [
      /^m-badge-single$/,
      () => ({
        padding: '4px',
        'border-radius': '50%',
      })
    ]
  ]
}
