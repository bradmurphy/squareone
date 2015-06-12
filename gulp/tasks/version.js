var gulp = require('gulp');
var gutil = require('gulp-util');
var args = require('yargs').argv;
var config = require('../config.js');
var inject = require('gulp-inject-string');
var rename = require('gulp-rename');
var del = require('del');
var replace = require('gulp-replace');

gulp.task('version', function() {

  var date = new Date();
  var version;

  if( !args.version ){
    version = date.getTime();
  } else {
    version = args.version.toString().replace( /[^\w.-]+/g ,"");
  }

  //inject the date and version into a new CSS file
  gulp.src(config.styles.dist + 'index.css')
    .pipe(inject.prepend('/* Created: ' + date + '*/\n'))
    .pipe(inject.prepend('/* Version: ' + version + '*/\n'))
    .pipe(rename('index.' + version + '.css'))
    .pipe(gulp.dest(config.styles.dist));

  //delete the old CSS file
  del(config.styles.dist + 'index.css', {force: true});

  //inject the date and version into a new JS file
  gulp.src(config.scripts.dist + config.scripts.output)
    .pipe(inject.prepend('/* Created: ' + date + ' */\n'))
    .pipe(inject.prepend('/* Version: ' + version + ' */\n'))
    .pipe(rename('main.build.' + version + '.js'))
    .pipe(gulp.dest(config.scripts.dist));

  //delete the old JS file
  del(config.scripts.dist + config.scripts.output, {force: true});

  //inject the date and version into the index.html file
  //update references to the new CSS and JS files
  gulp.src(config.static.dist + '/index.html')
    .pipe(inject.append('<!-- Version: ' + version + ' -->\n'))
    .pipe(inject.append('<!-- Created: ' + date + ' -->'))
    .pipe(replace('index.css', 'index.' + version + '.css'))
    .pipe(replace('<html', '<html data-version="'+ version +'"'))
    .pipe(replace(config.scripts.output, 'main.build.' + version + '.js'))
    .pipe(gulp.dest(config.static.dist));

});
