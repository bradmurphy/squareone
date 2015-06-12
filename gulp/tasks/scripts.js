'use strict';

var config = require('../config.js');

var args = require('yargs').argv;
var gulp = require('gulp');
var concat = require('gulp-concat');
var concatsource = require('gulp-concat-sourcemap');
var connect = require('gulp-connect');

var streamify = require('gulp-streamify');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

var bower = require('main-bower-files');
var browserify = require('browserify');

var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
var source = require('vinyl-source-stream');
var transform = require('vinyl-transform');
var buffer = require('vinyl-buffer');

var watchify = require('watchify');

var hbsfy = require("hbsfy").configure({
  extensions: ["html"]
});

var gulpif = require('gulp-if');

function buildJavascript (b) {

	var bundler = browserify(config.scripts.entry, {
		debug: !config.production,
		cache: {}
	});

	if (config.watch) {
		bundler = watchify(bundler);
	}

	var rebundle = function() {
		return bundler.bundle()

			.on('error', function (error) {
				gutil.log('Browserify error: ' + error);
			})

			.pipe(source(config.scripts.output))

			//watch or dev
			.pipe(gulpif(config.watch, buffer()))
			.pipe(gulpif(config.watch, sourcemaps.init({loadMaps: true})))
				// Add transformation tasks to the pipeline here.
				.pipe(streamify(uglify()))
				.on('error', gutil.log)
			.pipe(gulpif(config.watch, sourcemaps.write('./')))

			//prod
			.pipe(gulpif(config.production, buffer()))
			.pipe(gulpif(config.production, streamify(uglify())))

			.pipe(gulp.dest(config.scripts.dist));
		};

	bundler.on('update', rebundle);

	return rebundle();

}

function buildBower() {

	var mainBowerFiles;

	try {
		mainBowerFiles = bower({debug: true, paths: '.'});
	} catch (error) {
		// bower_components folder does not exist, just print a warning and skip bower generation
		gutil.log(gutil.colors.red(error.message));
		return;
	}

	if (mainBowerFiles.length === 0) {
		gutil.log(gutil.colors.red('No bower components found, skipping bower.js generation'));
		return;
	}

	gutil.log(gutil.colors.yellow('Building: ' + mainBowerFiles.join('\n')));

	var task = gulp.src(mainBowerFiles)
    .on('error', function (error) {
      gutil.log('Bower error: ' + error);
    })
		.pipe(config.production ? concatsource('bower.js', {sourcesContent: true}) : concat('bower.js'))
		.pipe(config.production ? gutil.noop() : streamify(uglify()))
		.pipe(gulp.dest(config.scripts.dist));

	// if (config.server.livereload || args.livereload) {
	// 	task.pipe(connect.reload());
	// }

	return task;

}

function buildVendor () {

	var task = gulp.src(config.scripts.vendor)
    .on('error', function (error) {
      gutil.log('Vendor error: ' + error);
    })
		.pipe(config.production ? concatsource('vendor.js', {sourcesContent: true}) : concat('vendor.js'))
		.pipe(config.production ? gutil.noop() : streamify(uglify()))
		.pipe(gulp.dest(config.scripts.dist));

	// if (config.server.livereload || args.livereload) {
	// 	task.pipe(connect.reload());
	// }

	return task;
}

/*
** config.req = build ? ['clean'] : [];
** only run clean when building
*/

gulp.task('browserify', config.req, function () {

	return buildJavascript();

});

gulp.task('vendor', config.req, function() {

	return buildVendor();

});

gulp.task('bower', config.req, function () {

	return buildBower();

});

gulp.task('scripts', ['browserify', 'vendor', 'bower'], function () {

	// if (args.watch) {
	// 	gulp.watch(config.scripts.vendor, ['vendor']);
	// 	gulp.watch(config.scripts.bower, ['bower']);
	// 	gulp.watch(config.scripts.entry, ['browserify']);
	// }

});
