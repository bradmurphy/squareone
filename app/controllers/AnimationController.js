
'use strict';

// import console colors
var colors = require('../colors');

// import TweenMax and Waypoints
var TweenMax = require('TweenMax');
var Waypoint = require('Waypoint');

// animation controller object constructor
var AnimationController = function() {

	this.init();

};

// initialize antimation
AnimationController.prototype.init = function() {

	console.log('%c:: animation init ::', colors.red);

};

// start animation
AnimationController.prototype.start = function() {

	console.log('%c:: animation start ::', colors.green);

};

module.exports = AnimationController;