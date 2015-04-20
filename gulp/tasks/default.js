'use strict';

var config = require('../config.js');

var args = require('yargs').argv;
var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('default', ['build'], function () {

	if (args.watch) {
		config.server.livereload = (config.server.livereload || args.livereload);
		connect.server(config.server);
		require('opn')('http://localhost:' + config.server.port);
	}

});
