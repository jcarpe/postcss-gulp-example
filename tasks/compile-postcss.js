'use strict';

let postcss = require( 'gulp-postcss' );
// 	preprocessors = [
// 		require('autoprefixer'),
// 		require('cssnano'),
// 	];

module.exports = ( gulp, paths, preprocessors ) => {
	return () => {
		return gulp.src( paths.source )
	        .pipe( postcss( preprocessors ) )
	        .pipe( gulp.dest( paths.build ) );
	}
};