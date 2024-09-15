
import { definePreset } from "unocss";
import { buildColorCssVar } from "./preflights/colors";
import { buildBadge, buildDivider } from "./rules";
import { buildBackgroundShortcuts } from "./shortcuts/background";
import { buildTextShortcuts } from "./shortcuts/text";
import * as theme from "./theme";
import { Theme } from "./theme/types";

export const presetMaterial = definePreset<any, Theme>(
  () => ({
    name: 'material-preset',
    shortcuts: [
      buildTextShortcuts(),
      buildBackgroundShortcuts(),
    ],
    rules: [
      ...buildDivider(),
      ...buildBadge(),
    ],
    theme,
    preflights: [
      buildColorCssVar()
    ],
    variants: []
  })
)

export default presetMaterial
