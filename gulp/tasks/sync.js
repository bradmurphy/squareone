'use strict';

var config = require('../config.js');

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: config.server.root
        },
        port: config.server.port
    });
});

//stylus
gulp.task('reload-styles', ['styles'], function(){
	browserSync.reload();
});

gulp.task('reload-static', ['static'], function(){
	browserSync.reload();
});

gulp.task('reload-js', ['browserify'], function(){
	browserSync.reload();
});