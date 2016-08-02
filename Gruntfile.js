module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		watch: {

			css: {
				files: ['css/**/*.css'],
				tasks: ['postcss']
			},

			js: {
				files: ['js/**/*.js'],
				tasks: ['jshint', 'uglify']
			}
		},

		jshint: {
			dist: ['js/**/*.js'],
			gruntfile: ['Gruntfile.js']
		},

		postcss: {
			options: {
				map: true,
				processors: [
					require('precss')(),
					require('autoprefixer')(),
					require('cssnano')()
				]
			},
			app: {
				src: 'css/app.css',
				dest: 'dist/app.css'
			}
		},

		uglify: {
			dist: {
				options: {
					sourceMap: true
				},
				files: {
					'dist/app.js': [
						'bower_components/angular/angular.js',
						'js/wordcount.js'
					]
				}
			}
		},

		clean: {
			options: {
				force: true
			},
			dist: ['dist/']
		},

		copy: {
			bootstrap: {
				expand: true,
				flatten: true,
				cwd: 'bower_components/bootstrap/dist',
				src: '**/*.min.*',
				dest: 'dist'
			}
		}
	});

	grunt.registerTask('default', ['clean', 'postcss', 'jshint', 'uglify', 'copy']);
};
