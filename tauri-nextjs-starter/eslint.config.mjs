import antfu from '@antfu/eslint-config'

export default antfu(
  {
    nextjs: true,
    gitignore: true,
    rules: {
      'node/prefer-global/process': 'off',
    },
  },
  {
    ignores: [
      'src-tauri/target/**',
      'src-tauri/gen/**',
    ],
  },
)
