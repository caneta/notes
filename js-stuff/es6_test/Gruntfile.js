module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-babel');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({

		'babel': {
			options: {
				sourceMap: true
			},
			dist: {
				files: {
					'dist/modules.js' : 'src/modules.js',
					'dist/classes.js' : 'src/classes.js',
					'dist/arrows.js'  : 'src/arrows.js',
					'dist/app.js'     : 'src/app.js'
				}
			}
		},

		watch: {
			scripts: {
				files: ['src/**/*.js'],
				tasks: ['babel']
			},
		}

	});

	grunt.registerTask('default', ['watch']);
};
