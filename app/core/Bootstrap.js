'use strict';

// import config and createjs
var config = require('../config');
var createjs = require('createjs');

// import controllers
var AnimationController = require('../controllers/AnimationController');
var animation = new AnimationController();

// bootstrap constructor
var Bootstrap = function() {

    // variables
    this.count = 0;

    // initialize the page and start preloading
    this.init();

};

// initialize and preload
Bootstrap.prototype.init = function() {

    // preload all images in the config manifest
    var preload = new createjs.LoadQueue(true);
    preload.on('fileload', this.filesLoaded.bind(this));
    preload.loadManifest(config.manifest);
    preload.load();

};

// check if the files are loaded
Bootstrap.prototype.filesLoaded = function() {

    // preloading handler count
    this.count++;

    // load every image before starting
    if (config.manifest.length === this.count) {
      // files are preloaded, page is ready
      console.log(':: images loaded: ' + this.count + ' ::');
      this.allItemsLoaded();
    }

};

// once all items are loaded, start animation
Bootstrap.prototype.allItemsLoaded = function() {

    // start animation
    console.log(':: all items loaded ::');
    animation.start();

};

module.exports = Bootstrap;
