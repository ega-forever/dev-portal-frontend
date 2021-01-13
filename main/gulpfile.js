const pug = require('gulp-pug');
const watch = require('gulp-watch');
const gulp = require('gulp');


const job = () => {
  return gulp.src(['./src/*.pug', './src/**/*.pug']).pipe(pug({
    doctype: 'html',
    pretty: false
  }))
    .pipe(gulp.dest('dist'));
}

exports.default = () => {
  watch(['./src/*.pug', './src/**/*.pug'], {ignoreInitial: false}, job);
}
