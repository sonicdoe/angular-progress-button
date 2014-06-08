module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.17/angular.min.js',
			'https://code.angularjs.org/1.2.17/angular-mocks.js',
			'src/*.js',
			'test/**/*.spec.js'
		],
		exclude: [],
		preprocessors: {},
		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['PhantomJS'],
		singleRun: false
	})
}
