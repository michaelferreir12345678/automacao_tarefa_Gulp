const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const images = require ('gulp-imagemin');

// Tarefa de compilacao de imagens
function compressaoImages(){
    return gulp.src('./source/images/*')
        .pipe(images())
        .pipe(gulp.dest('./build/images'))
}

// Tarefa de compilacao dos arquivos em JS com obfuscacao para torna-lo mais ilegivel 
function compressaoJs (){
    return gulp.src('./source/script/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/script/'))
}

// Tarefa de compilacao dos arquivos Sass
function compilaSass (){
    return gulp.src('./source/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/styles'))
}

exports.default = function(){
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(compressaoImages));
    gulp.watch('./source/script/*.js', {ignoreInitial: false}, gulp.series(compressaoJs));
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
}