
'use strict';

var TweenMax = require('TweenMax');

// animation controller object constructor
var AnimationController = function() {

	this.init();

};

// initialize banner
AnimationController.prototype.init = function() {

	console.log(':: animation init ::');

};

// start animation
AnimationController.prototype.start = function() {

	console.log(':: animation start ::');

};

module.exports = AnimationController;