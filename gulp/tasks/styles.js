'use strict';

var config = require('../config.js');

var args = require('yargs').argv;
var gulp = require('gulp');
var changed = require('gulp-changed');
var csso = require('gulp-csso');
var stylus = require('gulp-stylus');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');

var nib = require('nib');

function buildStylus () {

	var task = gulp.src(config.styles.entry)
		.pipe(changed(config.styles.dist))
		.pipe(stylus({
			'use': [nib()],
			'include css': true,
			sourcemap: {
				inline: true
			}
		}))
		.pipe(config.production ? csso() : gutil.noop())
		.pipe(gulp.dest(config.styles.dist));

	return task;

}

/*
** config.req = build ? ['clean'] : [];
** only run clean when building
*/

gulp.task('stylus', config.req, function () {

	return buildStylus();

});

gulp.task('styles', ['stylus'], function () {


});
