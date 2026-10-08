var gulp = require('gulp');
var postcss = require('gulp-postcss');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var autoprefixer = require('autoprefixer');

gulp.task('css', function() {
  var plugins = [
    cssImport,
    nested,
    autoprefixer({ cascade: false })
  ];

  return gulp
    .src('src/style.css')
    .pipe(postcss(plugins).on('error', function(err) {
      console.error(err.toString());
      this.emit('end');
    }))
    .pipe(gulp.dest('public/css'));
});