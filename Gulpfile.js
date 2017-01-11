'use strict';

let gulp = require( 'gulp' ),
	postcss = require( 'gulp-postcss' ),
	preprocessors = [
		require( 'postcss-contrast' ),
		require( 'autoprefixer' ),
		require( 'cssnano' ),
	];

gulp.task( 'default', () => {});

gulp.task( 'styles', require( './tasks/compile-postcss.js' )(
	gulp,
	postcss,
	{
		source: './src/styles/main.css',
		build: './build/styles'
	},
	preprocessors
) );