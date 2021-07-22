/*
Author: chankruze (chankruze@geekofia.in)
Created: Thu Jul 22 2021 10:19:01 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2021 and beyond
*/

export const typescriptConfig = {
	extends: ['plugin:@typescript-eslint/eslint-recommended'],
	overrides: [
		{
			parser: '@typescript-eslint/parser',
			extends: [
				'plugin:@typescript-eslint/recommended',
				'prettier/@typescript-eslint',
				'plugin:import/typescript'
			],
			plugins: ['@typescript-eslint'],

			files: ['*.ts', '*.tsx'],

			rules: {}
		}
	]
};
