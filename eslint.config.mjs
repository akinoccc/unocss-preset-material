import defineConfig from 'eslint-config-airbe'

export default defineConfig({
  js: true,
  ts: true,
  vue: true,
  importX: true,
  unusedImports: true,
  ignores: ['dist/*', 'node_modules/*'],
})
