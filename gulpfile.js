var gulp 				= require('gulp'),
    extender    = require('gulp-html-extend'),
    htmlreplace = require('gulp-html-replace'),
  	rename      = require("gulp-rename"),
  	clean       = require('gulp-clean'),
		less 				= require('gulp-less'),
  	newer       = require('gulp-newer'),
    inject      = require('gulp-inject'),
  	spritesmith = require('gulp.spritesmith');

gulp.task('css-clean', function () {
  return gulp.src(['app/style/css/**/*'], {read: true})
  .pipe(clean());
});

/* less */
gulp.task('less',['css-clean'],function(){
  return gulp.src('app/style/less/*.less')
  .pipe(less())
  .pipe(gulp.dest('app/style/css'))
  });

gulp.task('copy-css',['less'],function(){
  return gulp.src('app/style/less/lib/*').pipe(gulp.dest('app/style/css/lib'));
});

/* index 合併 layout */
gulp.task('index-extend',function () {
  return gulp.src('app/_index.html')
  .pipe(extender({annotations:false,verbose:false}))
  .pipe(rename(function (path) {
      path.basename = "index";
  }))
  .pipe(gulp.dest('app'));
});

gulp.task('index-inject',['index-extend','copy-css'],function(){
  return gulp.src('app/index.html')
  .pipe(inject(gulp.src(['app/js/lib/jquery.min.js','app/js/layout.js','app/style/css/layout.css'], {read: false}), {relative: true}))
  .pipe(gulp.dest('app'));
});

gulp.task('tutorials-clean',function(){
  return gulp.src(['app/tutorials/**/*'], {read: true}).pipe(clean());
});

/* tutorials 合併 layout */
gulp.task('tutorials-extend',['tutorials-clean'], function () {
  return gulp.src('app/tutorials-content/*.html')
  .pipe(extender({annotations:false,verbose:false}))
  .pipe(gulp.dest('app/tutorials'));
});

gulp.task('tutorials-inject',['tutorials-extend','copy-css'],function(){
  return gulp.src('app/tutorials/*.html')
  .pipe(inject(gulp.src(['app/js/lib/*','app/js/layout.js','app/js/tutorials.js','app/style/css/lib/*','app/style/css/layout.css','app/style/css/tutorials.css'], {read: false}), {relative: true}))
  .pipe(gulp.dest('app/tutorials'));
});


/* 圖片合併 */
gulp.task('layout-sprite', function () {
  var spriteData = gulp.src('app/img/sprite/*.png').pipe(spritesmith({
    imgName: 'layout/layout-sprite.png',
    cssName: '../style/temp/layout-sprite.css'
  }));
  spriteData.pipe(gulp.dest('app/img'));
});

gulp.task('watch',function(){
	gulp.watch('app/style/less/*.less',['copy-css']);
	gulp.watch('app/_index.html',['index-inject']);
	gulp.watch('app/_layout.html',['index-inject','tutorials-inject']);
  gulp.watch('app/tutorials-content/*.html',['tutorials-inject']);
});

gulp.task('build-clean',function(){
  return gulp.src(['build/**/*'], {read: true}).pipe(clean());
});

gulp.task('build',['build-clean'],function(){
	gulp.src('app/img/index/*').pipe(gulp.dest('build/img/index'));
	gulp.src('app/img/layout/*').pipe(gulp.dest('build/img/layout'));
  gulp.src('app/img/tutorials/*').pipe(gulp.dest('build/img/tutorials'));
	gulp.src('app/js/**/*').pipe(gulp.dest('build/js'));
	gulp.src('app/style/css/**/*').pipe(gulp.dest('build/style/css'));
	gulp.src('app/tutorials/*').pipe(gulp.dest('build/tutorials'));
	gulp.src('app/index.html').pipe(gulp.dest('build'));
  gulp.src('app/robots.txt').pipe(gulp.dest('build'));
});

gulp.task('default',['index-inject','tutorials-inject','less','layout-sprite','watch']);