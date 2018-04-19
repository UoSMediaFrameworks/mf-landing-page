var gulp = require('gulp');
var chug = require( 'gulp-chug' );
var nodemon = require('gulp-nodemon');
var zip = require('gulp-zip');

gulp.task('build_page', function() {
    gulp.src( './page_source/gulpfile.js' )
    .pipe(chug())
});

gulp.task('copy', function() {
    gulp.src('./page_source/index.html')
    .pipe(gulp.dest('public'));

    gulp.src('./page_source/css/**/*')
    .pipe(gulp.dest('public/css'));

    gulp.src('./page_source/img/**/*')
    .pipe(gulp.dest('public/img'));

    gulp.src('./page_source/js/**/*')
    .pipe(gulp.dest('public/js'));

    gulp.src('./page_source/vendor/**/**')
    .pipe(gulp.dest('public/vendor'));
});

gulp.task('start', function () {
    nodemon({
        script: 'index.js',
        ext: 'js',
        env: {'NODE_ENV': 'production'}
      })
});

gulp.task('zip', function() {
    gulp.src('./**')
        .pipe(zip('archive.zip'))
        .pipe(gulp.dest('./'))
});

gulp.task('default', ['copy']);

gulp.task('rebuild', ['build_page']);


