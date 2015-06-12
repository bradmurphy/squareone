'use strict';

var config = require('../config.js');

var args = require('yargs').argv;
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');

function buildImagemin () {



}

gulp.task('imagemin', ['static'], function () {

	return gulp.src(config.images.src)
		.pipe(changed(config.images.dist))
		.pipe(imagemin())
		.pipe(gulp.dest(config.images.dist));

});

gulp.task('images', ['imagemin'], function() {

});
