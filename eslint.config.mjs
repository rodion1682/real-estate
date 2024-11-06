import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import i18next from 'eslint-plugin-i18next';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{
		languageOptions: {
			globals: {
				...globals.browser,
				__IS_DEV__: true,
			},
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	i18next.configs['flat/recommended'],
	{
		rules: {
			indent: [2, 'tab'],

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

			'@typescript-eslint/ban-ts-comment': 'warn',
			'@typescript-eslint/no-unused-vars': 'warn',

			'import/no-unresolved': 'off',
			'import/prefer-default-export': 'off',
			'import/extensions': 'off',
			'import/no-extraneous-dependencies': 'off',

			'no-shadow': 'off',
			'no-underscore-dangle': 'off',
			'no-param-reassign': 'off',
			'no-tabs': 'off',
			'no-unused-vars': 'warn',
			'no-undef': 'warn',

			'i18next/no-literal-string': [
				'error',
				{ markupOnly: true, ignoreAttribute: ['data-testid', 'to'] },
			],
		},
	},
	{
		files: ['**/src/**/*.test.{ts,tsx}'],
		rules: {
			'i18next/no-literal-string': 'off',
		},
	},
];
