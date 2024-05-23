require('@rushstack/eslint-patch/modern-module-resolution');

const path = require('node:path');
const createAliasSetting = require('@vue/eslint-config-airbnb/createAliasSetting');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-airbnb',
  ],

  settings: {
    ...createAliasSetting({
      '@': `${path.resolve(__dirname, 'src')}`,
      '&': `${path.resolve(__dirname, 'src/publishing')}`,
      '~': `${path.resolve(__dirname, 'src/service')}`,
    }),
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'linebreak-style': 0,
    'vue/html-button-has-type': ['error', {
      button: true,
      submit: true,
      reset: true,
    }],
  },
  'eol-last': 0,
};
