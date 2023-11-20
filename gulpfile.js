const gulp = require("gulp");
const browserSync = require("browser-sync").create();

gulp.task("server", function(){
  browserSync.init({
    server: {
      baseDir: "./src/"
    }
  });
});

gulp.task("watch", function() {
  gulp.watch("./src/*.html", gulp.parallel(browserSync.reload));
});

gulp.task("default", gulp.parallel("server", "watch"));