module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'plugin:react/recommended',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript',
		'prettier',
		'plugin:jest/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module',
		allowImportExportEverywhere: true
	},
	plugins: ['react', '@typescript-eslint', 'jest'],
	rules: {
		'react/no-unescaped-entities': 0,
		'react/prop-types': 0,
		'react/react-in-jsx-scope': 0
	}
};
