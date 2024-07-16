module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', '@vue/prettier'],
  plugins: ['vue'],
  rules: {
    'tailwindcss/no-custom-classname': 'off',
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'off',
    'vue/require-default-prop': 'off',
    'no-undef': 'off'
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  globals: {
    describe: 'readonly',
    it: 'readonly',
    expect: 'readonly',
    module: 'readonly',
    ethers: false
  }
}
