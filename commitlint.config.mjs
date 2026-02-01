export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 72],
    'type-case': [2, 'always', 'lower-case'],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-enum': [2, 'always', 'lower-case'],
    'subject-case': [2, 'always', 'lower-case']
  }
}
