module.exports = {
	env: {
		es6: true,
		node: true
	},
	extends: ['airbnb-base', 'airbnb-typescript', 'prettier'],
	parserOptions: {
		project: ['./tsconfig.json'],
		tsconfigRootDir: __dirname
	},
	rules: {
		'import/prefer-default-export': 'off',
		'react/jsx-filename-extension': 'off'
	}
};
