// uno.config.ts
import { defineConfig, presetUno, presetIcons, presetTypography, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      autoInstall: true,
    }),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
  // rules: [
  //   [/^moj-(.*)$/, ([_, x]) => ({
  //     width: x * 2,
  //   }), {}]
  // ],
  // shortcuts: {
  //   'xe': 'w-4 h-2'
  // },
})
