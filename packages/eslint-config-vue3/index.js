module.exports = {
  extends: ['plugin:vue/vue3-recommended', 'plugin:import/typescript', '@bedrockstreaming/vue'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
  },
};
