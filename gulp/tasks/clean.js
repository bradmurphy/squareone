'use strict';

var config = require('../config.js');

var gulp = require('gulp');
var del = require('del');
var gutil = require('gulp-util');

gulp.task('clean', function (cb) {

	del.sync(config.clean.src, {force: true});
	cb();

});