'use strict';

var Controller = require('../controllers/Controller');
var page = new Controller();

var config = require('../config');
var createjs = require('createjs');

// bootstrap constructor
var Bootstrap = function() {

    // variables
    this.count = 0;
    this.init();

};

// preload images
Bootstrap.prototype.init = function() {

    // polite loading
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

    console.log(':: all items loaded ::');
    page.start();

};

module.exports = Bootstrap;
