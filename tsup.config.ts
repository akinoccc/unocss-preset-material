import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'package/index.ts',
  ],
  shims: true,
})
