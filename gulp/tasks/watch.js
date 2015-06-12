'use strict';

var config = require('../config.js');

var gulp = require('gulp');
var gutil = require('gulp-util');

gulp.task('watch', ['tests', 'static', 'scripts', 'styles', 'images', 'browser-sync'], function() {

	//styles
	gulp.watch(config.styles.watch, ['reload-styles']);

	//static
	gulp.watch(config.static.src, ['reload-static']);

	//scripts
	gulp.watch(config.scripts.watch, ['reload-js']);

	//notification
	gutil.log(gutil.colors.bgGreen('Watching for changes... butts'));

});
