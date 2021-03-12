const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const replace = require('gulp-replace');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const flatten = require('gulp-flatten');
const clean = require('gulp-clean');
const cleanCss = require('gulp-clean-css');
const merge = require('merge-stream');
const { src, series, parallel, dest, watch } = require('gulp');

const controllersPath = 'components/**/*.js';
const servicesPath = 'services/**/*.js';
const directivesPath = 'shared/**/*.js';
const directivesHtmlPath = 'shared/**/*.html';
const cssPath1 = 'components/**/*.css';
const cssPath2 = 'shared/**/*.css';

/*function copyHtml() {
    return src("./indexDev.html")
        .pipe(concat('./navBar.html'))
        .pipe(replace('bundle.js', 'bundle.min.js'))
        .pipe(dest("./"))
}*/


function imgTask() {
    return src('src/images/*')
        .pipe(imagemin())
        .pipe(dest('dist/images'));
}

function controllersTask() {
    return src(['config/globalCtrl.js', controllersPath])
        .pipe(concat('controllers.js'))
        .pipe(terser({keep_fnames: true, mangle: false}))
        .pipe(dest('dist/js'));
}

function alljs() {
    return src(['config/config.js', 'dist/js/services.js', 'dist/js/controllers.js', 'dist/js/directives/directives.js'])
        .pipe(concat('all.js'))
        .pipe(terser({keep_fnames: true, mangle: false}))
        .pipe(dest('dist/js'));
}

function servicesTask() {
    return src(servicesPath)
        .pipe(concat('services.js'))
        .pipe(terser({keep_fnames: true, mangle: false}))
        .pipe(dest('dist/js'));
}

function directivesTask() {
    return src(directivesPath)
        .pipe(concat('directives.js'))
        .pipe(terser({keep_fnames: true, mangle: false}))
        .pipe(dest('dist/js/directives'));
}
function directivesHtml() {
    return src(directivesHtmlPath)
        .pipe(flatten())
        .pipe(dest('dist/js/directives'));
}

function cleanDirectives() {
    return src("dist/js/directives", {read: false})
        .pipe(clean())
}


/*function jsTaskMin() {
    return src("dist/assets/js/main.js")
        //.pipe(sourcemaps.init())
        .pipe(concat('main.min.js'))
        .pipe(terser())
        //.pipe(sourcemaps.write('.'))
        .pipe(dest('dist/assets/js'));
}
*/
function cssTask() {
    return src(['config/global.css', cssPath1, cssPath2])
                .pipe(concat('all.css'))
                .pipe(cleanCss())
                .pipe(dest('dist/css'));
}
/*
function buildBundle(){
    return browserify('dist/assets/js/main.js')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(dest('./'))
}

function minifyBundle(){
    return src("./bundle.js")
        //.pipe(sourcemaps.init())
        .pipe(concat('bundle.min.js'))
        .pipe(terser())
        //.pipe(sourcemaps.write('.'))
        .pipe(dest('./'));
}*/



exports.cssTask = cssTask;
exports.imgTask = imgTask;
/*
exports.jsTask = jsTask;
exports.jsTaskMin = jsTaskMin;
exports.copyHtml = copyHtml;
exports.buildBundle = buildBundle;
exports.minifyBundle = minifyBundle;*/

exports.controllersTask = controllersTask;
exports.directivesTask = directivesTask;
exports.directivesHtml = directivesHtml;
exports.cleanDirectives = cleanDirectives;
exports.servicesTask = servicesTask;
exports.alljs = alljs;
exports.prepare = series(cleanDirectives, parallel(directivesTask, servicesTask, controllersTask, directivesHtml, cssTask, imgTask))


exports.default = series(exports.prepare, alljs);