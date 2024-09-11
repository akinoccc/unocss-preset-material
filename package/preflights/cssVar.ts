import {Preflight} from "unocss";
import {ThemeScheme} from "../types/theme";

export const buildCssVar = (): Preflight<{ colors: ThemeScheme }>[] => {
  return [
    {
      getCSS: ({ theme }) => `
        * {
          --md-color-primary: ${theme.colors.light.primary};
          --md-color-on-primary: ${theme.colors.light.onPrimary};
          --md-color-primary-container: ${theme.colors.light.primaryContainer};
          --md-color-on-primary-container: ${theme.colors.light.onPrimaryContainer};
          --md-color-secondary: ${theme.colors.light.secondary};
          --md-color-on-secondary: ${theme.colors.light.onSecondary};
          --md-color-secondary-container: ${theme.colors.light.secondaryContainer};
          --md-color-on-secondary-container: ${theme.colors.light.onSecondaryContainer};
          --md-color-tertiary: ${theme.colors.light.tertiary};
          --md-color-on-tertiary: ${theme.colors.light.onTertiary};
          --md-color-tertiary-container: ${theme.colors.light.tertiaryContainer};
          --md-color-on-tertiary-container: ${theme.colors.light.onTertiaryContainer};
          --md-color-error: ${theme.colors.light.error};
          --md-color-on-error: ${theme.colors.light.onError};
          --md-color-error-container: ${theme.colors.light.errorContainer};
          --md-color-on-error-container: ${theme.colors.light.onErrorContainer};
          --md-color-background: ${theme.colors.light.background};
          --md-color-on-background: ${theme.colors.light.onBackground};
          --md-color-surface: ${theme.colors.light.surface};
          --md-color-on-surface: ${theme.colors.light.onSurface};
          --md-color-surface-variant: ${theme.colors.light.surfaceVariant};
          --md-color-on-surface-variant: ${theme.colors.light.onSurfaceVariant};
          --md-color-outline: ${theme.colors.light.outline};
          --md-color-outline-variant: ${theme.colors.light.outlineVariant};
          --md-color-shadow: ${theme.colors.light.shadow};
          --md-color-scrim: ${theme.colors.light.scrim};
          --md-color-inverse-primary: ${theme.colors.light.inversePrimary};
          --md-color-inverse-surface: ${theme.colors.light.inverseSurface};
          --md-color-inverse-on-surface: ${theme.colors.light.inverseOnSurface};
        }
      }
      // 黑暗模式
      @media (prefers-color-scheme: dark) {
        * {
          --md-color-primary: ${theme.colors.dark.primary};
          --md-color-on-primary: ${theme.colors.dark.onPrimary};
          --md-color-primary-container: ${theme.colors.dark.primaryContainer};
          --md-color-on-primary-container: ${theme.colors.dark.onPrimaryContainer};
          --md-color-secondary: ${theme.colors.dark.secondary};
          --md-color-on-secondary: ${theme.colors.dark.onSecondary};
          --md-color-secondary-container: ${theme.colors.dark.secondaryContainer};
          --md-color-on-secondary-container: ${theme.colors.dark.onSecondaryContainer};
          --md-color-tertiary: ${theme.colors.dark.tertiary};
          --md-color-on-tertiary: ${theme.colors.dark.onTertiary};
          --md-color-tertiary-container: ${theme.colors.dark.tertiaryContainer};
          --md-color-on-tertiary-container: ${theme.colors.dark.onTertiaryContainer};
          --md-color-error: ${theme.colors.dark.error};
          --md-color-on-error: ${theme.colors.dark.onError};
          --md-color-error-container: ${theme.colors.dark.errorContainer};
          --md-color-on-error-container: ${theme.colors.dark.onErrorContainer};
          --md-color-background: ${theme.colors.dark.background};
          --md-color-on-background: ${theme.colors.dark.onBackground};
          --md-color-surface: ${theme.colors.dark.surface};
          --md-color-on-surface: ${theme.colors.dark.onSurface};
          --md-color-surface-variant: ${theme.colors.dark.surfaceVariant};
          --md-color-on-surface-variant: ${theme.colors.dark.onSurfaceVariant};
          --md-color-outline: ${theme.colors.dark.outline};
          --md-color-outline-variant: ${theme.colors.dark.outlineVariant};
          --md-color-shadow: ${theme.colors.dark.shadow};
          --md-color-scrim: ${theme.colors.dark.scrim};
          --md-color-inverse-primary: ${theme.colors.dark.inversePrimary};
          --md-color-inverse-surface: ${theme.colors.dark.inverseSurface};
          --md-color-inverse-on-surface: ${theme.colors.dark.inverseOnSurface};
        }
      }
    `
    }
  ]
}
