'use strict';

var config = require('../config.js');

var args = require('yargs').argv;
var gulp = require('gulp');
var cache = require('gulp-cached');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var mocha = require('gulp-mocha');

gulp.task('lint', function () {

	return gulp.src(config.lint.src)
		.pipe(cache('lint'))
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish'))
});

gulp.task('codestyle', function () {

  return gulp.src(config.lint.src)
    .pipe(jscs({
      esnext: true
    }));

});

gulp.task('mocha', function () {

	return gulp.src(config.tests.src)
		.pipe(mocha(config.tests.mocha.config));

});

gulp.task('tests', ['lint', 'codestyle', 'mocha'], function() {

	if (args.watch) {
		gulp.watch(config.lint.src, ['lint', 'mocha']);
		gulp.watch(config.tests.src, ['lint', 'mocha']);
	}

});
