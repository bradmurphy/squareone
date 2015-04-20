'use strict';

var gulp = require('gulp');

gulp.task('build', ['tests', 'clean', 'static', 'scripts', 'styles', 'images']);
