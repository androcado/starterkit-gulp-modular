/*
** starterkit-gulp-modular
** andreeberle.de
*/

var gulp = require('gulp');
var config = require('./gulp-tasks/config.js');

// Task 1: console.log('hallo world');
require(config.paths.tasks + '/task1')(gulp, config);

// Task 2: copy html file from src to dist
require(config.paths.tasks + '/task2')(gulp, config);