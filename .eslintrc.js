module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ['plugin:react/recommended'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module',
		allowImportExportEverywhere: true
	},
	plugins: ['react'],
	rules: {
		'react/no-unescaped-entities': 0,
		'react/prop-types': 0,
		'react/react-in-jsx-scope': 0
	}
};
