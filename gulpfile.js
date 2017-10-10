var gulp = require('gulp'),
sass = require('gulp-ruby-sass'),
prefix = require('gulp-autoprefixer');

function errorLog(error) {
  console.error.bind(error);
  this.emit('end');
}

//Styles Task 
gulp.task('styles', function() {   
    return sass('final/*.scss', {
     style: 'expended'
    })    
     .on('error', errorLog)
     .pipe(prefix('last 2 versions'))
     .pipe(gulp.dest('css'))
   });


//Watch task
//Watch JS
gulp.task('watch', function() {
                gulp.watch('scss/*.scss', ['styles']);
    }); 


 gulp.task('default', ['styles', 'watch']);  
