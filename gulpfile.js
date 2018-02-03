const gulp = require('gulp');
const browserSync = require('browser-sync');
const plumber = require('gulp-plumber');
const htmlhint = require('gulp-htmlhint');
const reload = browserSync.reload;

gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: './public'
    },
    open: 'external'
  });
});

gulp.task('html', function () {
  return gulp.src('./public/**/*.html')
    .pipe(plumber())
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(htmlhint.failReporter())
});

gulp.task('watch', function () {
  gulp.watch(['./public/**/*.html'], ['html', reload]);
  gulp.watch('./public/css/**').on("change", reload);
  gulp.watch('./public/js/**').on("change", reload);
});

gulp.task('default', ['html', 'browser-sync', 'watch']);
