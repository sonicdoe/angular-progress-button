module.exports = function(grunt) {
	grunt.initConfig({
		bowerPkg: grunt.file.readJSON('bower.json'),
		karma: {
			unit: {
				configFile: 'karma.conf.js',
				singleRun: true,
				browsers: ['PhantomJS']
			}
		},
		cssmin: {
			build: {
				options: {
					banner: '/* <%= bowerPkg.name %> v<%= bowerPkg.version %> (<%= bowerPkg.homepage %>) */'
				},
				src: 'src/progress-button.css',
				dest: 'dist/progress-button.min.css'
			}
		},
		uglify: {
			options: {
				banner: '/* <%= bowerPkg.name %> v<%= bowerPkg.version %> (<%= bowerPkg.homepage %>) */\n'
			},
			build: {
				src: 'src/progress-button.js',
				dest: 'dist/progress-button.min.js'
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify')
	grunt.loadNpmTasks('grunt-karma')

	grunt.registerTask('build', ['cssmin', 'uglify'])
	grunt.registerTask('test', ['karma'])
	grunt.registerTask('default', [])
}
