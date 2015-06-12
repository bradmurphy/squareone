# Getting started

There are a couple of applications you will need to install that will be used for every project: Node & Gulp. Follow 
the directions at these links to install these applications:

* [Node](https://nodejs.org/)
* [Gulp](http://gulpjs.com/)

After getting Node installed, copy these files into your project folder first. Then, from that folder, run:

    npm install
    npm install -g bower
    npm install -g gulp
    bower install
    gulp build
     
The Gulp command will compile, test, and build. There are two arguments available for use:   

* `gulp watch` will start a server


# Gulp

This project uses the Gulp taskrunner to run a number of different tasks including file copying, moving, and deletion, 
validation, testing, image processing, distribution packaging, and even launching the project in a browser.

## Config

The `./gulp/config.js` file contains a number of different configuration properties for the various build tasks listed 
below. Before listing the properties, one thing to note is the `dest` variable, which changes from if the `--watch` 
flag is used.

* __clean__ -  
  `src` lists directories and files to be processed
  
* __styles__ -  
  `entry` is the starting point for Stylus;  
  `dist` is the destination folder 
  
* __static__ -  
  `src` lists directories and files to be processed;  
  `dist` is the destination folder
  
* __images__ -  
  `src` lists directories and files to be processed;  
  `dist` is the destination folder
  
* __tests__ -  
  `src` lists directories and files to be processed;  
  `mocha` is the Mocha test framework configuration
  
* __lint__ -  
  `src` lists directories and files to be processed
  
* __scripts__ -  
  `entry` is the starting point for Browserify;  
  `output` is the destination file;  
  `dist` is the destination folder;  
  `vendor` lists directories and files to be processed by the vendor task
  
* __server__ -  
  `root` is the base folder for the server instance;  
  `port` is the server port;  
  `livereload` specifies if browser refreshes when files change
  
* __bower__ -  
  is the directory to be processed by the bower task

## Tasklist

The tasks listed here are in the format __taskname__ *(dependencies)*. Each task may be called on the command line with the 
command `gulp taskname`. 

* __default__ *(build)* -  
  The default task, which can be called with just `gulp`. If the `--watch` flag is used, a local server instance is 
  started and the project is opened in the default browser.
  
* __build__ *(tests, clean, static, scripts, style, images)* - 
  Calls sub-tasks to build the project.
  
* __version__ -

    If no `--version=STRING-OR-NUMBER-HERE` arguments are used, a version number from new Date().getTime() is added to the JS and CSS file names. main.build.js would be `main.build.1433375041078.js` and `index.css` would be `index.1433375041078.css`. index.html would have the following comments at the bottom of the file while the CSS and JS files will have this included at the top.
         
   
   `Version: 1433375041078`
   
   `Created: Wed Jun 03 2015 16:44:01 GMT-0700 (Pacific Daylight Time)`

  To use your own version number use `--version=STRING-OR-NUMBER-HERE`
  
* __tests__ *(lint, codestyle, mocha)* -  
  Runs unit tests and performs validation checks on JavaScript source files.
  
* __lint__ -  
  Runs JSHint validation checks against JavaScript source files.
  
* __codestyle__ -  
  Runs JSCS code style checks againt JavaScript source files.
  
* __mocha__ -  
  Runs unit tests found in the tests folder using the Mocha framework.
  
* __clean__ *(build)* -    
  Empty out specified directories and delete specified files to prepare for other tasks.
  
* __static__ *(copy)* -  
  Calls sub-tasks to process files in the static folder.
  
* __copy__ *(clean)*
  Copies files from the static folder to the distribution folder.
  
* __scripts__ *(browserify, vendor, bower)* -  
  Calls sub-tasks for processing JavaScript source files.
  
* __browserify__ *(clean)* -  
  Compiles app script in the distribution folder using Browserify.

* __vendor__ *(clean)* -  
  Concatenates vendor scripts in the distribution folder.
  
* __bower__ *(clean)* -  
  Concatenates Bower scripts in the distribution folder.
  
* __styles__ *(stylus)* -  
  Calls sub-tasks for processing CSS source files.
  
* __stylus__ *(clean)* -  
  Compiles app styles in the distribution folder using Stylus.
  
* __images__ *(imagemin)* -  
  Calls sub-tasks for processing images.
  
* __imagemin__ *(static)* -  
  Compresses source image files in the distribution folder.
   

# Structure

Describe the file and folder setup.

* __/app__ - Scripts go here. Vendor scripts go in the `vendor` sub-folder.

* __/docs__ - Currently not in use.

* __/gulp__ - Gulp configuration and tasks go here

* __/static__ - HTML, images, fonts, audio, video, etc. Anything that will be served as-is.

* __/styles__ - Stylesheets go here. Use Stylus. https://learnboost.github.io/stylus/

* __/tests__ - Unit tests go here. Use Mocha. http://mochajs.org/

* __.bowerrc__ - Bower configuration. http://bower.io/docs/config/

* __.editorconfig__ - IDE configuration. http://editorconfig.org/

* __.gitattributes__ - Git configuration. http://git-scm.com/docs/gitattributes

* __.gitignore__ - Ignore these files in Git repo. http://git-scm.com/docs/gitignore

* __.jscsrc__ - JavaScript Code Style configuration. http://jscs.info/overview.html

* __bower.json__ - Bower packages. http://bower.io/docs/creating-packages/

* __gulpfile.js__ - Gulp configuration. Loads scripts from `./gulp`

* __package.json__ - NPM packages. https://docs.npmjs.com/files/package.json
