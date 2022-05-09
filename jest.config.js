module.exports = {
	roots: ['./'],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.ts$': '@swc/jest'
	},
	testRegex: '(/__tests__/.*|(\\.|/)(spec))\\.ts$',
	coveragePathIgnorePatterns: [
		'.eslintrc.js',
		'.node/',
		'coverage/',
		'jest.config.js',
		'jest/',
		'node_modules/',
		'tests/',
		'webpack.config.js'
	],
	moduleFileExtensions: ['ts', 'js', 'json'],
	coverageDirectory: './coverage',
	transformIgnorePatterns: ['jest.config.js'],
	testResultsProcessor: 'jest-sonar-reporter'
};
