const gulp = require('gulp');

gulp.task('default',function(callback)
{
console.log("Hello, from Gulp!")
callback();
});

gulp.task('hello',function(callback)
{
console.log("Hello, from Gulp!")
callback();
});

gulp.task('goodbye',function(callback)
{
console.log("Bye, bye, from Gulp!")
callback();
});

//gulp.task('default', gulp.series('hello','goodbye'));

gulp.task('default', gulp.parallel('hello', 'goodbye'));