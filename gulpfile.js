const gulp = require('gulp');

//Creating the first Gulp Task

gulp.task("hello",function(callback) {
  console.log("Hello, from Gulp!");
  callback();
});