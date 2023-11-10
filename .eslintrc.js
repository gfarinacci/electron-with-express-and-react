module.exports = {
	'env': {
		'browser': true,
		'node': true,
		'es2021': true,
		'jest': true
	},
	'extends': [
		'eslint:recommended'
	],
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'ignorePatterns': ['./node_modules/*', './out/*', './client/build/*', './client/node_modules/*'],
	'rules': {
		'no-control-regex': 0,
		'no-unused-vars': 'off',
		'indent': [
			'warn',
			'tab'
		],
		'linebreak-style': [
			'warn',
			'unix'
		],
		'quotes': [
			'warn',
			'single'
		],
		'semi': [
			'warn',
			'never'
		]
	}
}
