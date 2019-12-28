/***= Task2 =***/
module.exports = function(gulp, config) {
    gulp.task('task2', function() {
        // copy html file from src to dist
        gulp.src(config.paths.src + '/**/*.html')
        .pipe(gulp.dest(config.paths.dist));
    });
};