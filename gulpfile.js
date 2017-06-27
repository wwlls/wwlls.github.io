var gulp = require('gulp');
var less = require('gulp-less');
var notify = require('gulp-notify');
//var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var proxy = require('http-proxy-middleware');


gulp.task('less', function () {
  gulp.src('app/less/**/*.less')
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/styles/'));
});


gulp.task('jsmin', function () {
    gulp.src('app/scripts/*.js')
        //.pipe(uglify())
        .pipe(gulp.dest('dist/scripts/'));
});

gulp.task('testHtmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
    };
    gulp.src('app/index.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist/'));
});

gulp.task('serve', function () {
    browserSync({
      notify: false,
      port: 7070,
      ghostMode: false,
      server: {
        baseDir: ['dist','app'],
        routes: {
          '/bower_components': 'bower_components'
        }
      }
    });
    gulp.watch([
      'app/*.html',
      'app/components/**/*.html',
      'app/scripts/*.js',
      'app/less/**/*.less',
    ]).on('change', reload);
});


gulp.task('testLess', function () {
  gulp.watch('app/less/**/*.less', ['less']); //当所有less文件发生改变时，调用testLess任务
});

gulp.task('testJs', function () {
  gulp.watch('app/scripts/*.js', ['jsmin']); //当所有js文件发生改变时，调用testJs任务
});

gulp.task('testHtml', function () {
  gulp.watch('aapp/index.html', ['testHtmlmin']); //当所有html文件发生改变时，调用testHtml任务
});

gulp.task('default', ['testLess','testJs','testHtml','serve','less','jsmin','testHtmlmin']);

