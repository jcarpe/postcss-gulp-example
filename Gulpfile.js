'use strict';

let gulp = require( 'gulp' ),
	postcss = require( 'gulp-postcss' ),
	preprocessors = [
		require('autoprefixer'),
		require('cssnano'),
	];

gulp.task( 'default', () => {});

gulp.task( 'styles', require( './tasks/compile-postcss.js' )(
	gulp,
	{
		source: './src/styles/main.css',
		build: './build/styles'
	},
	preprocessors
) );