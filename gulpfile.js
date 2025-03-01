const gulp = require('gulp');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

const paths = {
    styles: {
        src: 'quiz/**/*.css',
        dest: 'dist/'
    }
};

// Tarefa para minificar e ofuscar o JavaScript
gulp.task('minify-js', () => {
    return gulp.src('quiz/script.js')
        .pipe(terser({
            mangle: {
                toplevel: true
            },
            compress: {
                dead_code: true,
                drop_console: true,
                drop_debugger: true,
                keep_fnames: false,
                passes: 3
            },
            output: {
                beautify: false
            }
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('quiz/dist'));
});

// Tarefa para minificar o CSS
gulp.task('styles', () => {
    return gulp.src('quiz/style.css')
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('quiz/dist'));
});

// Tarefa de build principal
gulp.task('build', gulp.series('minify-js', 'styles'));