// https://eslint.org/docs/user-guide/configuring

module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      objectLiteralDuplicateProperties: false
    }
  },
  env: {
    amd: true,
    browser: true,
    node: true
  },
  plugins: [
    'import'
  ],
  extends: [
    'plugin:import/errors',
    'standard'
  ],
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'no-debugger': ['error'],
    'keyword-spacing': ['error']
  }
}
