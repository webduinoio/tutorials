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
    md2json     = require('gulp-markdown-to-json');

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

/*                           .                               .o8  
                        .o8                              "888  
 .ooooo.  oooo    ooo .o888oo  .ooooo.  ooo. .oo.    .oooo888  
d88' `88b  `88b..8P'    888   d88' `88b `888P"Y88b  d88' `888  
888ooo888    Y888'      888   888ooo888  888   888  888   888  
888    .o  .o8"'88b     888 . 888    .o  888   888  888   888  
`Y8bod8P' o88'   888o   "888" `Y8bod8P' o888o o888o `Y8bod88P" */

/* index 合併 layout */
gulp.task('index-extend',function () {
  return gulp.src('app/_index.html')
  .pipe(extender({annotations:false,verbose:false}))
  .pipe(rename(function (path) {
      path.basename = "index";
  }))
  .pipe(gulp.dest('app'));
});

/* about 合併 layout */
gulp.task('about-extend',function () {
  return gulp.src('app/_about.html')
  .pipe(extender({annotations:false,verbose:false}))
  .pipe(rename(function (path) {
      path.basename = "about";
  }))
  .pipe(gulp.dest('app'));
});

/* buy 合併 layout */
gulp.task('buy-extend',function () {
  return gulp.src('app/_buy.html')
  .pipe(extender({annotations:false,verbose:false}))
  .pipe(rename(function (path) {
      path.basename = "buy";
  }))
  .pipe(gulp.dest('app'));
});

/* webduino 合併 layout */
gulp.task('webduino-extend',function () {
  return gulp.src('app/_webduino.html')
  .pipe(extender({annotations:false,verbose:false}))
  .pipe(rename(function (path) {
      path.basename = "webduino";
  }))
  .pipe(gulp.dest('app'));
});

/*  o8o                  o8o                         .   
 `"'                  `"'                       .o8   
oooo  ooo. .oo.      oooo  .ooooo.   .ooooo.  .o888oo 
`888  `888P"Y88b     `888 d88' `88b d88' `"Y8   888   
 888   888   888      888 888ooo888 888         888   
 888   888   888      888 888    .o 888   .o8   888 . 
o888o o888o o888o     888 `Y8bod8P' `Y8bod8P'   "888" 
                      888                             
                  .o. 88P                             
                  `Y888P                               */

/* 置換為合適的 js 與 css */
gulp.task('content-inject',['index-extend','about-extend','buy-extend','webduino-extend'],function(){
  return gulp.src(['app/index.html','app/buy.html','app/about.html','app/webduino.html'])
  .pipe(inject(gulp.src(['app/js/lib/jquery.min.js','app/js/layout.js','app/style/css/layout.css'], {read: false}), {relative: true}))
  .pipe(gulp.dest('app'));
});

gulp.task('content-inject-final',['index-extend','about-extend','buy-extend','webduino-extend','copy-css'],function(){
  return gulp.src(['app/index.html','app/buy.html','app/about.html','app/webduino.html'])
  .pipe(inject(gulp.src(['app/js/lib/jquery.min.js','app/js/layout.js','app/style/css/layout.css'], {read: false}), {relative: true}))
  .pipe(gulp.dest('app'));
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
  return gulp.src(['app/md/md2html/**/*','app/json/**/*'], {read: true}).pipe(clean());
});

gulp.task('md',['md-clean'], function () {
  return gulp.src(['app/md/**/*.md','!app/md/**/temp.md'])
      .pipe(markdown())
      .pipe(gulp.dest('app/md/md2html/'));
});

gulp.task('md2json',['md'], function(){
  return gulp.src(['app/md/**/*.md','!app/md/**/temp.md'])
    .pipe(gutil.buffer())
    .pipe(md2json('tutorials.json'))
    .pipe(gulp.dest('app/json'))
});

gulp.task('md-extend',['md2json','tutorials-clean'], function () {
  return gulp.src('app/md/md2html/*.html')
  .pipe(extender({annotations:false,verbose:false}))
  .pipe(gulp.dest('app/tutorials'));
});

/* tutorials 置換為合適的 js 與 css */

gulp.task('tutorials-inject',['md-extend'],function(){
  return gulp.src('app/tutorials/*.html')
  .pipe(inject(gulp.src(['app/js/lib/*','app/js/layout.js','app/js/tutorials.js','app/style/css/lib/tomorrow.css','app/style/css/layout.css','app/style/css/tutorials.css'], {read: false}), {relative: true}))
  .pipe(gulp.dest('app/tutorials'));
});

gulp.task('tutorials-inject-final',['md-extend','copy-css'],function(){
  return gulp.src('app/tutorials/*.html')
  .pipe(inject(gulp.src(['app/js/lib/*','app/js/layout.js','app/js/tutorials.js','app/style/css/lib/tomorrow.css','app/style/css/layout.css','app/style/css/tutorials.css'], {read: false}), {relative: true}))
  .pipe(gulp.dest('app/tutorials'));
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
  gulp.watch('app/md/**/*.md',['tutorials-inject','md2json']);
	gulp.watch('app/style/less/*.less',['copy-css']);
	gulp.watch(['app/_index.html','app/_buy.html','app/_about.html','app/_webduino.html'],['content-inject']);
	gulp.watch('app/_layout.html',['content-inject','tutorials-inject']);
  //gulp.watch('app/tutorials-content/*.html',['tutorials-inject']);
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

gulp.task('build',['build-clean'],function(){
	gulp.src('app/img/index/*').pipe(gulp.dest('build/img/index'));
	gulp.src('app/img/layout/*').pipe(gulp.dest('build/img/layout'));
  gulp.src('app/img/tutorials/*').pipe(gulp.dest('build/img/tutorials'));
	gulp.src('app/js/**/*').pipe(gulp.dest('build/js'));
	gulp.src('app/style/css/**/*').pipe(gulp.dest('build/style/css'));
	gulp.src('app/tutorials/*').pipe(gulp.dest('build/tutorials'));
	gulp.src(['app/index.html','app/webduino.html','app/about.html','app/buy.html']).pipe(gulp.dest('build'));
  gulp.src('app/robots.txt').pipe(gulp.dest('build'));
  gulp.src('app/md/**/*').pipe(gulp.dest('build/md'));
  gulp.src('app/json/**/*').pipe(gulp.dest('build/json'));
  gulp.src('app/ga/**/*').pipe(gulp.dest('build/ga'));
});

gulp.task('default',['content-inject-final','tutorials-inject-final','md2json','less','watch']);