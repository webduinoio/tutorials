var gulp 				= require('gulp'),
    extender    = require('gulp-html-extend'),
    htmlreplace = require('gulp-html-replace'),
  	rename      = require("gulp-rename"),
  	clean       = require('gulp-clean'),
		less 				= require('gulp-less'),
  	newer       = require('gulp-newer'),
    inject      = require('gulp-inject'),
  	spritesmith = require('gulp.spritesmith'),
    markdown    = require('gulp-markdown'),
    gutil       = require('gulp-util'),
    md2json     = require('gulp-markdown-to-json'),
    sitemap     = require('gulp-sitemap'),
    merge       = require('merge-stream'),
    minifyHTML  = require('gulp-minify-html'),
    minifyCss   = require('gulp-minify-css'),
    uglify      = require('gulp-uglify'),
    include     = require('gulp-html-tag-include');

gulp.task('css-clean', function () {
  return gulp.src(['app/style/css/*'], {read: true})
  .pipe(clean());
});

/* less */
gulp.task('less',['css-clean'],function(){
  return gulp.src('app/style/less/*.less')
  .pipe(less())
  .pipe(gulp.dest('app/style/css'))
  });

gulp.task('copy-css',['less'],function(){
  return gulp.src('app/style/less/lib/**/*').pipe(gulp.dest('app/style/css/lib'));
});

/*
 o8o                    .o8                        
 `"'                   "888                        
oooo  ooo. .oo.    .oooo888   .ooooo.  oooo    ooo 
`888  `888P"Y88b  d88' `888  d88' `88b  `88b..8P'  
 888   888   888  888   888  888ooo888    Y888'    
 888   888   888  888   888  888    .o  .o8"'88b   
o888o o888o o888o `Y8bod88P" `Y8bod8P' o88'   888o */

gulp.task('index',function () {
  return gulp.src('app/_index.html')
          .pipe(extender({annotations:false,verbose:false}))
          .pipe(rename(function (path) {
              path.basename = "index";
          }))
          .pipe(gulp.dest('app'));
});

gulp.task('indexEN',function () {
  return gulp.src('app/en/_index.html')
          .pipe(extender({annotations:false,verbose:false}))
          .pipe(rename(function (path) {
              path.basename = "index";
          }))
          .pipe(gulp.dest('app/en'));
});

/*                           .                               .o8  
                        .o8                              "888  
 .ooooo.  oooo    ooo .o888oo  .ooooo.  ooo. .oo.    .oooo888  
d88' `88b  `88b..8P'    888   d88' `88b `888P"Y88b  d88' `888  
888ooo888    Y888'      888   888ooo888  888   888  888   888  
888    .o  .o8"'88b     888 . 888    .o  888   888  888   888  
`Y8bod8P' o88'   888o   "888" `Y8bod8P' o888o o888o `Y8bod88P" */

/* 合併 layout */
gulp.task('extend',function () {
  var a1 = gulp.src('app/_about.html')
          .pipe(extender({annotations:false,verbose:false}))
          .pipe(rename(function (path) {
              path.basename = "about";
          }))
          .pipe(gulp.dest('app'));
  var a2 = gulp.src('app/_buy.html')
          .pipe(extender({annotations:false,verbose:false}))
          .pipe(rename(function (path) {
              path.basename = "buy";
          }))
          .pipe(gulp.dest('app'));
  var a3 = gulp.src('app/_tutorials.html')
          .pipe(extender({annotations:false,verbose:false}))
          .pipe(rename(function (path) {
              path.basename = "tutorials";
          }))
          .pipe(gulp.dest('app'));
  var a4 = gulp.src('app/_activity.html')
          .pipe(extender({annotations:false,verbose:false}))
          .pipe(rename(function (path) {
              path.basename = "activity";
          }))
          .pipe(gulp.dest('app'));
  var b1 = gulp.src('app/en/_tutorials.html')
          .pipe(extender({annotations:false,verbose:false}))
          .pipe(rename(function (path) {
              path.basename = "tutorials";
          }))
          .pipe(gulp.dest('app/en'));
  return merge(a1, a2, a3, a4, b1);
});

/*
 o8o                        oooo                    .o8            
 `"'                        `888                   "888            
oooo  ooo. .oo.    .ooooo.   888  oooo  oooo   .oooo888   .ooooo.  
`888  `888P"Y88b  d88' `"Y8  888  `888  `888  d88' `888  d88' `88b 
 888   888   888  888        888   888   888  888   888  888ooo888 
 888   888   888  888   .o8  888   888   888  888   888  888    .o 
o888o o888o o888o `Y8bod8P' o888o  `V88V"V8P' `Y8bod88P" `Y8bod8P'*/

/* 置換為合適的 js 與 css */

var contentInjectHtml = [
  'app/buy.html',
  'app/tutorials.html',
  'app/activity.html',
];
gulp.task('include',['extend'],function(){
  return gulp.src(contentInjectHtml)
  .pipe(include())
  .pipe(gulp.dest('app'));
});

gulp.task('include-final',['extend','copy-css'],function(){
  return gulp.src(contentInjectHtml)
  .pipe(include())
  .pipe(gulp.dest('app'));
});

var contentInjectENHtml = [
  'app/en/tutorials.html'
];
gulp.task('include-en',['extend'],function(){
  return gulp.src(contentInjectENHtml)
  .pipe(include())
  .pipe(gulp.dest('app/en'));
});

gulp.task('include-en-final',['extend','copy-css'],function(){
  return gulp.src(contentInjectENHtml)
  .pipe(include())
  .pipe(gulp.dest('app/en'));
});



/*     .                   .                       o8o            oooo           
  .o8                 .o8                       `"'            `888           
.o888oo oooo  oooo  .o888oo  .ooooo.  oooo d8b oooo   .oooo.    888   .oooo.o 
  888   `888  `888    888   d88' `88b `888""8P `888  `P  )88b   888  d88(  "8 
  888    888   888    888   888   888  888      888   .oP"888   888  `"Y88b.  
  888 .  888   888    888 . 888   888  888      888  d8(  888   888  o.  )88b 
  "888"  `V88V"V8P'   "888" `Y8bod8P' d888b    o888o `Y888""8o o888o 8""888P' */

/* tutorials 合併 layout */
gulp.task('tutorials-clean',function(){ 
  return gulp.src(['app/tutorials/**/*'], {read: true}).pipe(clean());
});

/* markdown，需要手動修改把 id 拿掉，markdown to json 必須把 data[path].body mark 起來 */
gulp.task('md-clean',function(){
  return gulp.src(['app/_tutorials-md/md2html/**/*','app/json/**/*'], {read: true}).pipe(clean());
});

gulp.task('md',['md-clean'], function () {
  return gulp.src(['app/_tutorials-md/**/*.md','!app/_tutorials-md/**/temp.md'])
      .pipe(markdown())
      .pipe(gulp.dest('app/_tutorials-md/md2html/'));
});

gulp.task('md2json',['md'], function(){
  return gulp.src(['app/_tutorials-md/**/*.md','!app/_tutorials-md/**/temp.md'])
    .pipe(gutil.buffer())
    .pipe(md2json('tutorials.json'))
    .pipe(gulp.dest('app/json'))
});

gulp.task('md-extend',['md2json','tutorials-clean'], function () {
  return gulp.src('app/_tutorials-md/md2html/*.html')
  .pipe(extender({annotations:false,verbose:false}))
  .pipe(gulp.dest('app/tutorials'));
});

/* tutorials 置換為合適的 js 與 css */

gulp.task('tutorials-include',['md-extend'],function(){
  return gulp.src('app/tutorials/*.html')
  .pipe(include())
  .pipe(gulp.dest('app/tutorials'));
});

gulp.task('tutorials-include-final',['md-extend','copy-css'],function(){
  return gulp.src('app/tutorials/*.html')
  .pipe(include())
  .pipe(gulp.dest('app/tutorials'));
});

/*
d88888b d8b   db        d888888b db    db d888888b  .d88b.  d8888b. d888888b  .d8b.  db      
88'     888o  88        `~~88~~' 88    88 `~~88~~' .8P  Y8. 88  `8D   `88'   d8' `8b 88      
88ooooo 88V8o 88           88    88    88    88    88    88 88oobY'    88    88ooo88 88      
88~~~~~ 88 V8o88 C8888D    88    88    88    88    88    88 88`8b      88    88~~~88 88      
88.     88  V888           88    88b  d88    88    `8b  d8' 88 `88.   .88.   88   88 88booo. 
Y88888P VP   V8P           YP    ~Y8888P'    YP     `Y88P'  88   YD Y888888P YP   YP Y88888P 
*/

/* tutorials 合併 layout */
gulp.task('tutorials-en-clean',function(){ 
  return gulp.src(['app/en/tutorials/**/*'], {read: true}).pipe(clean());
});

/* markdown，需要手動修改把 id 拿掉，markdown to json 必須把 data[path].body mark 起來 */
gulp.task('md-en-clean',function(){
  return gulp.src(['app/en/_tutorials-md/md2html/**/*','app/en/json/**/*'], {read: true}).pipe(clean());
});

gulp.task('md-en',['md-en-clean'], function () {
  return gulp.src(['app/en/_tutorials-md/**/*.md','!app/en/_tutorials-md/**/temp.md'])
      .pipe(markdown())
      .pipe(gulp.dest('app/en/_tutorials-md/md2html/'));
});

gulp.task('md2json-en',['md-en'], function(){
  return gulp.src(['app/en/_tutorials-md/**/*.md','!app/en/_tutorials-md/**/temp.md'])
    .pipe(gutil.buffer())
    .pipe(md2json('tutorials-en.json'))
    .pipe(gulp.dest('app/en/json'))
});

gulp.task('md-en-extend',['md2json-en','tutorials-en-clean'], function () {
  return gulp.src('app/en/_tutorials-md/md2html/*.html')
  .pipe(extender({annotations:false,verbose:false}))
  .pipe(gulp.dest('app/en/tutorials'));
});

/* tutorials 置換為合適的 js 與 css */

gulp.task('tutorials-en-include',['md-en-extend'],function(){
  return gulp.src('app/en/tutorials/*.html')
  .pipe(include())
  .pipe(gulp.dest('app/en/tutorials'));
});

gulp.task('tutorials-en-include-final',['tutorials-en-include'],function(){
  return gulp.src('app/en/tutorials/*.html')
  .pipe(include())
  .pipe(gulp.dest('app/en/tutorials'));
});



/*
 .o8                               
"888                               
 888oooo.  oooo  oooo  oooo    ooo 
 d88' `88b `888  `888   `88.  .8'  
 888   888  888   888    `88..8'   
 888   888  888   888     `888'    
 `Y8bod8P'  `V88V"V8P'     .8'     
                       .o..P'      
                       `Y8P'*/
gulp.task('buy-clean',function(){ 
  return gulp.src(['app/buy/**/*'], {read: true}).pipe(clean());
});

gulp.task('buy-include',['buy-clean'], function () {
  return gulp.src(['app/_buy-content/*.html','!app/_buy-content/_public.html'])
  .pipe(extender({annotations:false,verbose:false}))
  .pipe(include())
  .pipe(gulp.dest('app/buy'));
});

/*                               o8o      .             
                              `"'    .o8             
 .oooo.o oo.ooooo.  oooo d8b oooo  .o888oo  .ooooo.  
d88(  "8  888' `88b `888""8P `888    888   d88' `88b 
`"Y88b.   888   888  888      888    888   888ooo888 
o.  )88b  888   888  888      888    888 . 888    .o 
8""888P'  888bod8P' d888b    o888o   "888" `Y8bod8P' 
          888                                        
         o888o*/

/* 圖片合併 */
gulp.task('layout-sprite', function () {
  return gulp.src('app/img/sprite/*.png').pipe(spritesmith({
    imgName: 'layout/layout-sprite.png',
    cssName: '../style/temp/layout-sprite.css'
  })).pipe(gulp.dest('app/img'));
});



/*                                .             oooo        
                             .o8             `888        
oooo oooo    ooo  .oooo.   .o888oo  .ooooo.   888 .oo.   
 `88. `88.  .8'  `P  )88b    888   d88' `"Y8  888P"Y88b  
  `88..]88..8'    .oP"888    888   888        888   888  
   `888'`888'    d8(  888    888 . 888   .o8  888   888  
    `8'  `8'     `Y888""8o   "888" `Y8bod8P' o888o o888o */

gulp.task('watch',function(){
  gulp.watch(['app/_buy-content/*.html','_include-buy.html'],['buy-include']);
  gulp.watch('app/_tutorials-md/**/*.md',['tutorials-include','md2json']);
  gulp.watch('app/_include-tutorials.html',['tutorials-include']);
  gulp.watch('app/en/_tutorials-md/**/*.md',['tutorials-en-include','md2json-en']);
  gulp.watch('app/en/_include-tutorials.html',['tutorials-en-include']);
	gulp.watch('app/style/less/*.less',['copy-css']);
  gulp.watch('app/_index.html',['index']);
  gulp.watch('app/en/_index.html',['indexEN']);
	gulp.watch([
    'app/_buy.html',
    'app/_tutorials.html',
    'app/_activity.html'],['include']);
  gulp.watch(['app/en/_tutorials.html'],['include-en']);
	gulp.watch('app/_layout.html',['index','include','tutorials-include','buy-include'],['include-en']);
  gulp.watch('app/en/_layout.html',['indexEN']);
});



/*  .o8                    o8o  oooo        .o8  
"888                    `"'  `888       "888  
 888oooo.  oooo  oooo  oooo   888   .oooo888  
 d88' `88b `888  `888  `888   888  d88' `888  
 888   888  888   888   888   888  888   888  
 888   888  888   888   888   888  888   888  
 `Y8bod8P'  `V88V"V8P' o888o o888o `Y8bod88P" */

/* build */
gulp.task('build-clean',function(){
  return gulp.src(['build/*'], {read: true}).pipe(clean());
});

gulp.task('move',['build-clean'],function(){
  var opts = {
    conditionals: true,
    spare:true,
    loose: true,
    quotes: true
  };
	var a1 = gulp.src('app/img/index/*').pipe(gulp.dest('build/img/index')),
	    a2 = gulp.src('app/img/layout/*').pipe(gulp.dest('build/img/layout')),
      a3 = gulp.src('app/img/tutorials/*').pipe(gulp.dest('build/img/tutorials')),
      a4 = gulp.src('app/img/buy/*').pipe(gulp.dest('build/img/buy')),
      a5 = gulp.src('app/img/activity/*').pipe(gulp.dest('build/img/activity')),
      a6 = gulp.src('app/js/lib/*').pipe(gulp.dest('build/js/lib')),
      a7 = gulp.src('app/style/css/lib/*').pipe(gulp.dest('build/style/css/lib')),
      a7 = gulp.src('app/style/css/lib/fonts/*').pipe(gulp.dest('build/style/css/lib/fonts')),
      a8 = gulp.src('app/robots.txt').pipe(gulp.dest('build')),
      a9 = gulp.src('app/json/**/*').pipe(gulp.dest('build/json')),
      a10 = gulp.src('app/ga/**/*').pipe(gulp.dest('build/ga')),
	    a11 = gulp.src('app/js/*.js')
          .pipe(uglify())
          .pipe(gulp.dest('build/js')),
	    a12 = gulp.src('app/style/css/*.css')
          .pipe(minifyCss())
          .pipe(gulp.dest('build/style/css')),
	    a13 = gulp.src('app/tutorials/*.html')
            .pipe(minifyHTML(opts))
            .pipe(gulp.dest('build/tutorials')),
      a14 = gulp.src('app/buy/*')
            .pipe(minifyHTML(opts))
            .pipe(gulp.dest('build/buy')),
	    a15 = gulp.src([
              'app/index.html',
              'app/tutorials.html',
              'app/buy.html',
              'app/activity.html'])
            .pipe(minifyHTML(opts))
            .pipe(gulp.dest('build')),
      b1 = gulp.src('app/en/json/**/*').pipe(gulp.dest('build/en/json')),
      b2 = gulp.src('app/en/tutorials/*.html')
            .pipe(minifyHTML(opts))
            .pipe(gulp.dest('build/en/tutorials')),
      b3 = gulp.src([
              'app/en/index.html',
              'app/en/tutorials.html'])
            .pipe(minifyHTML(opts))
            .pipe(gulp.dest('build/en'));
  return merge(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, b1, b2, b3);
});

gulp.task('build',['move'], function () {
  return gulp.src(['build/**/*.html','!build/ga/*.html'])
        .pipe(sitemap({
            siteUrl: 'https://webduino.io'
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('default',['index','indexEN','include-final','buy-include','tutorials-include-final','md2json','include-en-final','tutorials-en-include-final','md2json-en','less','watch']);