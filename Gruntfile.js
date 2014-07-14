module.exports = function(grunt) {
	grunt.initConfig({
		bowerPkg: grunt.file.readJSON('bower.json'),
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				singleRun: true,
				browsers: ['PhantomJS']
			}
		}
	})

	grunt.loadNpmTasks('grunt-karma')

	grunt.registerTask('test', ['karma'])
	grunt.registerTask('default', [])
}
