
import * as theme from "./theme";
import {definePreset} from "unocss";
import {buildTextShortcuts} from "./shortcuts/text";
import {buildBackgroundShortcuts} from "./shortcuts/background";
import {buildColorCssVar} from "./preflights/colors";
import {buildBadge, buildDivider} from "./rules";
import {Theme} from "./theme/types";

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
    ]
  })
)

export default presetMaterial
