/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    node: true
    // 'vue/setup-compiler-macros': true
  },
  // globals: { defineOptions: 'writable' },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  // parserOptions: {
  //   ecmaVersion: 'latest'
  // },
  rules: {
    // => 前后必须有括号
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 强制驼峰命名
    camelcase: 'off',
    // '@typescript-eslist/camelcase': 0,
    'vue/multi-word-component-names': 0,
    // 忽略命名
    // 'vue/multi-word-component-names': [
    //   'error',
    //   {
    //     ignores: [
    //       'index',
    //       'About',
    //       'Theme',
    //       'Home',
    //       'Navbar',
    //       'Mine',
    //       'indexmine',
    //       'Menu'
    //     ]
    //   }
    // ],
    // "vue/v-on-event-hyphenation": ["always", {}],
    // 逗号前后空格
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    // 换行时 逗号风格在行首尾
    'comma-style': [2, 'last'],
    // 必须使用if(){} 中的 {}
    curly: [2, 'multi-line'],
    // 全等 ===
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    // 生成器前后的函数空格
    'generator-star-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // node.js 错误处理
    'handle-callback-err': [2, '^(err|error)$'],
    // 字面量：前后空格
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    'keyword-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 去末尾分号
    semi: [2, 'never'],
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    // 单引号代替双引号
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 4
        },
        multiline: {
          max: 1
        }
      }
    ],
    '@typescript-eslint/no-explicit-any': ['off']
    // "object-curly-spacing": [2, "always"],
  }
}
