var gulp = require('gulp'),
sass = require('gulp-ruby-sass'),
prefix = require('gulp-autoprefixer'),
server = require('gulp-server-livereload');

function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}

gulp.task('webserver', function() {
  gulp.src('')
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      directoryListing: false,
      open: false
    }));
});

//Styles Task 
gulp.task('styles', function() {   
    return sass('final/*.scss', {
     style: 'expanded'
    })    
     .on('error', errorLog)
     .pipe(prefix('last 2 versions'))
     .pipe(gulp.dest('css'))
   });


//Watch task
//Watch JS
gulp.task('watch', function() {
    gulp.watch('final/*.scss', ['styles']);
    }); 


 gulp.task('default', ['styles', 'watch', 'webserver']);  
