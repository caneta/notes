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
					'dist/app.js': 'src/app.js'
				}
			}
		},

		watch: {
			scripts: {
				files: ['src/*.js'],
				tasks: ['babel']
			},
		}

	});

	grunt.registerTask('default', ['watch']);
};
