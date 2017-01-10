'use strict';

let gulp = require( 'gulp' ),
	postcss = require( 'gulp-postcss' ),
	preprocessors = [
		require('autoprefixer'),
		require('cssnano'),
	];

gulp.task( 'default', () => {

});

gulp.task( 'styles', () => {
    return gulp.src( './src/styles/main.css' )
        .pipe( postcss( preprocessors ) )
        .pipe( gulp.dest( './build/styles' ) )
});