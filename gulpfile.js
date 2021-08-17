const gulp = require('gulp');
const del = require("del");

const clean = () => {
  return del('docs');
};

const copy = () => {
  return gulp.src('source/**/*')
    .pipe(gulp.dest('docs'));
};

exports.pages = gulp.series(clean, copy)