'use strict';

module.exports = ( gulp, postcss, paths, preprocessors ) => {
	return () => {
		return gulp.src( paths.source )
	        .pipe( postcss( preprocessors ) )
	        .pipe( gulp.dest( paths.build ) );
	}
};