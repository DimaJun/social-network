import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactRefresh from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import pluginImport from 'eslint-plugin-import';

export default [
    { ignores: ['dist', 'node_modules'] },
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    reactRefresh.configs.flat.recommended,
    {
        plugins: { 'react-hooks': reactHooks, import: pluginImport },
        settings: { react: { version: 'detect' } },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'import/order': ['warn', { 'newlines-between': 'always' }],
            'react/react-in-jsx-scope': "off",
            '@typescript-eslint/no-unused-vars': 'warn'
        },
    },
    {
        files: ['src/**/*.{ts,tsx,js,jsx}'],
        languageOptions: {
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
];
