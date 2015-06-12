'use strict';

var gulp = require('gulp');
var zip = require('gulp-zip');
var config = require('../config');

gulp.task('zip', ['build'], function() {
  return gulp.src(config.zip.src)
    .pipe(zip(config.zip.name))
    .pipe(gulp.dest(config.zip.dist));
});
