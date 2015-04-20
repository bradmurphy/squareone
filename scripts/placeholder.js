'use strict';

var config = require('./config');
var TweenLite = require('TweenLite');
var CSSPlugin = require('CSSPlugin');
var EasePack = require('EasePack');
var SplitText = require('SplitText');
var TimelineLite = require('TimelineLite');
var Waypoints = require('Waypoints');

var Placeholder = function() {

  this.initialize();

};

Placeholder.prototype.initialize = function() {

  console.log('JavaScript is... ' + config.log);

};

module.exports = Placeholder;
