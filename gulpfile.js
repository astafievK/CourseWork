const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

gulp.task('sass', function () {
    return gulp.src('pages/home/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer({
            overrideBrowserslist: ['last 2 versions', 'Safari >= 8'],
            cascade: false
        })]))
        .pipe(gulp.dest('pages/home/'));
});

gulp.task('watch', function () {
    gulp.watch('pages/home/style.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'watch'));