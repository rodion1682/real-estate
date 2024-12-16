import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import i18next from 'eslint-plugin-i18next';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import storybookPlugin from 'eslint-plugin-storybook';
import { fixupPluginRules } from '@eslint/compat';

const languageOptions = {
	globals: {
		...globals.browser,
		__IS_DEV__: true,
		__API__: true,
		__PROJECT__: true,
	},
	ecmaVersion: 'latest',
	sourceType: 'module',
	parser: tsParser,
};

const pluginsOptions = {
	js: pluginJs,
	react: pluginReact,
	'import/parsers': tsParser,
	'@typescript-eslint': tsPlugin,
	'react-hooks': fixupPluginRules(reactHooksPlugin),
	storybook: storybookPlugin,
};

const cinfigOptions = [
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	i18next.configs['flat/recommended'],
];

export default [
	{ files: ['**/*.{js,ts,jsx,tsx}'] },
	{
		languageOptions: {
			...languageOptions,
		},
	},
	...cinfigOptions,
	{
		plugins: { ...pluginsOptions },
	},
	{
		rules: {
			// Spacing and Formatting
			indent: [2, 'tab'],

			// React rules
			'react/jsx-indent': [2, 'tab'],
			'react/jsx-indent-props': [2, 'tab'],
			'react/jsx-filename-extension': [
				2,
				{ extensions: ['.js', '.jsx', '.tsx'] },
			],
			'react/require-default-props': 'off',
			'react/react-in-jsx-scope': 'off',
			'react/function-component-definition': 'off',
			'react/no-children-prop': 'off',
			'react/prop-types': 'off',
			'react/jsx-props-no-spreading': 'warn',
			'react/display-name': 'off',

			// React Hooks rules
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'error',

			// TypeScript rules
			'@typescript-eslint/ban-ts-comment': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/no-explicit-any': 'warn',

			// Import rules
			'import/no-unresolved': 'off',
			'import/prefer-default-export': 'off',
			'import/extensions': 'off',
			'import/no-extraneous-dependencies': 'off',

			// General JavaScript rules
			'no-shadow': 'off',
			'no-underscore-dangle': 'off',
			'no-param-reassign': 'off',
			'no-unused-vars': 'off',
			'no-undef': 'off',

			// i18next rules
			'i18next/no-literal-string': [
				'error',
				{ markupOnly: true, ignoreAttribute: ['data-testid', 'to'] },
			],
		},
	},
	{
		files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
		rules: {
			'i18next/no-literal-string': 'off',
			'max-len': 'off',
		},
	},
];
