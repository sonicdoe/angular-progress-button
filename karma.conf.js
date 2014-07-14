fs = require('fs')

module.exports = function(config) {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: [
			'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.17/angular.min.js',
			'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.17/angular-mocks.js',
			'src/*.js',
			'test/**/*.spec.js'
		],
		exclude: [],
		preprocessors: {},
		reporters: ['progress', 'saucelabs'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: [],
		singleRun: false,
		sauceLabs: {
			testName: 'angular-progress-button'
		},
		customLaunchers: {
			SLChrome: {
				base: 'SauceLabs',
				browserName: 'chrome',
				platform: 'Linux'
			},
			SLFirefox: {
				base: 'SauceLabs',
				browserName: 'firefox',
				platform: 'Linux'
			},
			SLSafari: {
				base: 'SauceLabs',
				browserName: 'safari',
				platform: 'OS X 10.9'
			},
			SLIE9: {
				base: 'SauceLabs',
				browserName: 'internet explorer',
				platform: 'Windows 7',
				version: '9'
			},
			SLIE: {
				base: 'SauceLabs',
				browserName: 'internet explorer',
				platform: 'Windows 8.1'
			},
			SLiPhone: {
				base: 'SauceLabs',
				browserName: 'iphone',
				platform: 'OS X 10.9',
				version: '7.1'
			},
			SLAndroid: {
				base: 'SauceLabs',
				browserName: 'android',
				platform: 'Linux'
			}
		}
	})

	if(process.env.ANGULARJS_VERSION) {
		config.files[0] = 'https://ajax.googleapis.com/ajax/libs/angularjs/' +
			process.env.ANGULARJS_VERSION + '/angular.min.js'

		config.files[1] = 'https://ajax.googleapis.com/ajax/libs/angularjs/' +
			process.env.ANGULARJS_VERSION + '/angular-mocks.js'
	}

	if(process.env.TRAVIS) {
		var buildLabel = 'Travis Build #' +
			process.env.TRAVIS_BUILD_NUMBER + ' (' + process.env.TRAVIS_BUILD_ID + ')'

		config.captureTimeout = 0
		config.sauceLabs.build = buildLabel
		config.sauceLabs.startConnect = false
		config.sauceLabs.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER
	}
}
