# Getting started

There are a couple of applications you will need to install that will be used for every project: Node and Gulp. Follow the directions at these links to install these applications:

* [Node](https://nodejs.org/)
* [Gulp](http://gulpjs.com/)

After getting those installed, copy these files into your project folder first. Then, from that folder, run:

    npm install
    gulp
     
The Gulp command will compile, test, and build. 

This workflow also uses the following tools you should familiarize yourself with:

* [Browserify](http://browserify.org/)
* [Stylus](https://learnboost.github.io/stylus/)

And finally the default vendor libraries that are included:

* [GSAP](http://greensock.com/gsap)
* [Waypoints](http://imakewebthings.com/waypoints/)


# Gulp

This project uses the Gulp taskrunner to run a number of different tasks including file copying, moving, and deletion, 
validation, testing, image processing, distribution packaging, and even launching the project in a browser.

## Config

The `./gulp/config.js` file contains a number of different configuration properties for the various build tasks listed 
below.

* __clean__ -  
  `src` lists directories and files to be processed
  
* __styles__ -  
  `entry` is the starting point for Stylus  
  `dist` is the destination folder 
  
* __static__ -  
  `src` lists directories and files to be processed  
  `dist` is the destination folder
  
* __images__ -  
  `src` lists directories and files to be processed  
  `dist` is the destination folder
  
* __lint__ -  
  `src` lists directories and files to be processed
  
* __scripts__ -  
  `watch` is the file for browser-sync to watch for livereload  
  `entry` is the starting point for Browserify  
  `output` is the destination file  
  `dist` is the destination folder  
  `vendor` lists directories and files to be processed by the vendor task
  
* __server__ -  
  `root` is the base folder for the server instance;  
  `port` is the server port;  
  `livereload` specifies if browser refreshes when files change
  
## Tasklist

The tasks listed here are in the format __taskname__ *(dependencies)*. Each task may be called on the command line with the 
command `gulp taskname`. 

* __default__ *(build)* -  
  The default task, which can be called with just `gulp`.
  
* __build__ *(tests, clean, static, scripts, style, images)* -  
  Calls sub-tasks to build the project.
  
* __tests__ *(lint, codestyle)* -  
  Performs validation checks on JavaScript source files.
  
* __lint__ -  
  Runs JSHint validation checks against JavaScript source files.
  
* __codestyle__ -  
  Runs JSCS code style checks againt JavaScript source files.
  
* __clean__ *(build)* -    
  Empty out specified directories and delete specified files to prepare for other tasks.
  
* __static__ *(copy)* -  
  Calls sub-tasks to process files in the static folder.
  
* __copy__ *(clean)* -  
  Copies files from the static folder to the distribution folder.
  
* __scripts__ *(browserify, vendor)* -  
  Calls sub-tasks for processing JavaScript source files.
  
* __browserify__ *(clean)* -  
  Compiles app script in the distribution folder using Browserify.

* __vendor__ *(clean)* -  
  Concatenates vendor scripts in the distribution folder.
  
* __styles__ *(stylus)* -  
  Calls sub-tasks for processing CSS source files.
  
* __stylus__ *(clean)* -  
  Compiles app styles in the distribution folder using Stylus.
  
* __images__ *(imagemin)* -  
  Calls sub-tasks for processing images.
  
* __imagemin__ *(static)* -  
  Compresses source image files in the distribution folder.
  
* __watch__ *(tests, static, scripts, style, images, browser-sync)* -  
  Calls sub-tasks to compile the project, then open up the project on a local server in your browser window.
   

# Structure

Describe the file and folder setup.

* __/dist__ - The final build folder, this is where all of the optimized files go.

* __/scripts__ - Scripts go here. Vendor scripts go in the `vendor` sub-folder.

* __/gulp__ - Gulp configuration and tasks go here

* __/static__ - HTML, images, fonts, audio, video, etc. Anything that will be served as-is.

* __/styles__ - Stylesheets go here. Use Stylus. https://learnboost.github.io/stylus/

* __.editorconfig__ - IDE configuration. http://editorconfig.org/

* __.gitattributes__ - Git configuration. http://git-scm.com/docs/gitattributes

* __.gitignore__ - Ignore these files in Git repo. http://git-scm.com/docs/gitignore

* __.jshintrc__ - JSHint configuration. http://jshint.com/docs/

* __.jscsrc__ - JavaScript Code Style configuration. http://jscs.info/overview.html

* __gulpfile.js__ - Gulp configuration. Loads scripts from `./gulp`

* __package.json__ - NPM packages. https://docs.npmjs.com/files/package.json
