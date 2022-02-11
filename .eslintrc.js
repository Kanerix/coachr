module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es2021': true,
		'node': true,
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 'latest'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'react/react-in-jsx-scope': 'off',
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'avoidEscape': true,
		'semi': [
			'error',
			'never'
		]
	},
	'ignorePatterns': [
		'node_modules',
		'dist',
		'.git',
		'build',
		'webpack'
	],
}