var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');

gulp.task('index', function () {
	return gulp.src('./index.html')
		.pipe(gulp.dest('dist'));
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', ['index'], function () {
  return gulp.src("./dist/**/*")
    .pipe(deploy())
});