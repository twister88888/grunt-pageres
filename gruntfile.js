'use strict';
module.exports = function (grunt) {
	grunt.initConfig({
		pageres: {
			multipleUrls: {
				options: {
					urls: ['myspringfield.com', 'womensecret.com', 'cortefiel.com', 'pedrodelhierro.com', 'fiftyfactory.com'],
					sizes: ['1600x1000'],
					dest: 'tmp',
					format: 'jpg',
					/*filename: '{{date}} - {{url}}',*/
					css: 'style.css'
				}
			}
		}
	});

	grunt.loadTasks('tasks');
	grunt.registerTask('default', ['pageres']);
};
