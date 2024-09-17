import { Rule } from "unocss";
import { Theme } from "../theme/types";

export const buildBadge = (): Rule<Theme>[] => {
  return [
    [
      /^m-badge-dot$/,
      (_, { theme }) => ({
        width: '6px',
        height: '6px',
        background: theme.colors.error,
        color: theme.colors.onError,
        'border-radius': '50%'
      })
    ],
    [
      /^m-badge$/,
      (_, { theme }) => ({
        display: 'inline-flex',
        'justify-content': 'center',
        'align-items': 'center',
        'min-width': '16px',
        height: '16px',
        padding: '4px 8px',
        background: theme.colors.error,
        color: theme.colors.onError,
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
