'use strict';

var args = require('yargs').argv;

var production = args.prod ? true : false;
var build = args._.length ? args._[0] === 'build' : false;
var watch = args._.length ? args._[0] === 'watch' : true;
var req = build ? ['clean'] : [];
var dest = watch ? './.tmp' : './dist';

var config = {

	build : build,

	watch : watch,

	req : req,

	production : production,

	zip: {
		dist: dest,
		src: dest + '/**/*',
		name: 'dist.zip'
	},

	clean: {
		src: ['./.tmp', './dist']
	},

	styles: {
		watch: './styles/**/*',
		entry: './styles/index.styl',
		dist: dest + '/css/'
	},

	static: {
		src: ['./static/**/*'],
		dist: dest
	},

	images: {
		src: ['./static/images/**/*.{gif,jpg,png,svg}'],
		dist: dest + '/images/'
	},

	tests: {
		src: ['./tests/**/*.js'],
		mocha: {
			config: {
				ui: 'tdd',
				reporter:'spec'
			}
		}
	},

	lint: {
		src: ['./app/**/*.js', '!app/vendor/**/*.js', './tests/**/*.js']
	},

	scripts: {
		watch: './app/**/*.js',
		entry: './app/index.js',
		output: 'main.build.js',
		dist: dest + '/js/',
		vendor: './app/vendor/**/*.js'
	},

	server: {
		root: './.tmp',
		port: 8080,
		livereload: true
	},

	bower: './bower_components/'

};

module.exports = config;
