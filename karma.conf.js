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

	if(process.env.ANGULARJS_VERSION) {
		config.files[0] = 'https://ajax.googleapis.com/ajax/libs/angularjs/' +
			process.env.ANGULARJS_VERSION + '/angular.min.js'

		config.files[1] = 'https://code.angularjs.org/' +
			process.env.ANGULARJS_VERSION + '/angular-mocks.js'
	}
}
