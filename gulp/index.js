'use strict';

var fs = require('fs');
var onlyScripts = require('./util/scriptFilter.js');
var tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

tasks.forEach(function (task) {
	require('./tasks/' + task);
});
