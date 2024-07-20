import { Hct } from '@material/material-color-utilities'
import { definePreset } from 'unocss'

const presetMaterial = definePreset(() => {
  console.log(Hct)

  return {
    name: 'material-preset',
    shortcuts: [],
    rules: [
      [
        /^text-(secondary)$/,
        ([_, prop]) => {
          return {
            'color': '#999',
          }
        },
      ]
    ],
    variants: [
      // ...
    ],
  }
})

export default presetMaterial
