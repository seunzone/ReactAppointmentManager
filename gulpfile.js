const gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    webserver = require('gulp-webserver');
    
const src = './process',
    app = './builds/app';

gulp.task('js', () => {
  return gulp.src( src + '/js/app.js' )
    .pipe(browserify({
      transform: 'reactify',
      debug: true
    }))
    .on('error',  (err) => {
      console.error('Error!', err.message);
    })
    .pipe(gulp.dest(app + '/js'));
});

gulp.task('html', () => {
  gulp.src( app + '/**/*.html');
});

gulp.task('css', () => {
  gulp.src( app + '/css/*.css');
});

gulp.task('watch', () => {
  gulp.watch( src + '/js/**/*.js', ['js']);
  gulp.watch( app + '/css/**/*.css', ['css']);
  gulp.watch([ app + '/**/*.html'], ['html']);
});

gulp.task('webserver', () => {
  gulp.src( app + '/')
    .pipe(webserver({
        livereload: true,
        open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
