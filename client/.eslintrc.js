module.exports = {
	'env': {
		'browser': true,
		'node': true,
		'es2021': true,
		'jest': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:react/recommended'
	],
	'settings' : {
		'react': {
			'version':'detect'
		}
	},
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'ignorePatterns': ['./node_modules/*', './build/*'],
	'rules': {
		'react/react-in-jsx-scope': 'off',
		'react/jsx-uses-react': 'off',
		'no-unused-vars': 'off',
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'warn',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'never'
		]
	}
}
