'use strict';

let gulp = require( 'gulp' ),
	connect = require( 'gulp-connect' ),
	postcss = require( 'gulp-postcss' ),
	preprocessors = [
		require( 'postcss-custom-properties' ),
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

gulp.task( 'serve', () => {
	connect.server({
		port: 1337
	});
});