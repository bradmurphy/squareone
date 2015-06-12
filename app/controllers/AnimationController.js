
'use strict';

// import TweenMax and Waypoints
var TweenMax = require('TweenMax');
var Waypoint = require('Waypoint');

// animation controller object constructor
var AnimationController = function() {

	this.init();

};

// initialize antimation
AnimationController.prototype.init = function() {

	console.log(':: animation init ::');

};

// start animation
AnimationController.prototype.start = function() {

	console.log(':: animation start ::');

};

module.exports = AnimationController;