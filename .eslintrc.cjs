module.exports = {
   env: { browser: true, es2020: true, node: true },
   extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
   ],
   parser: '@typescript-eslint/parser',
   parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
   plugins: ['react-refresh', 'unused-imports'],
   rules: {
      'react-refresh/only-export-components': 'warn',
      'no-unused-vars': 'warn',
      'unused-imports/no-unused-imports': 'warn',
      'unused-imports/no-unused-vars': [
         'warn',
         { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
      ],
   },
};

