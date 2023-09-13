const gulp = require('gulp')
const pug = require('gulp-pug')

gulp.task('pug', () => {
  return gulp
    .src('./src/pages/**/.*pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./dist/html'))
})

gulp.task('pug-index', () => {
  return gulp
    .src('./*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
})

gulp.task('default', () => {
  gulp.watch('./src/pages/**/*.pug', gulp.series('pug'))
  gulp.watch('./*pug', gulp.series('pug-index'))
})

