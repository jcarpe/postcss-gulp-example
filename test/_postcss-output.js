'use strict';

let Promise = require( 'bluebird' ),
	fs = Promise.promisifyAll( require( 'fs' ) ),
	path = require( 'path' ),
	gulp = require( 'gulp' ),
	postcss = require( 'gulp-postcss' ),
	preprocessors = [
		require( 'postcss-custom-properties' ),
		require( 'postcss-contrast' ),
		require( 'autoprefixer' ),
		require( 'cssnano' ),
	],
	compilePostcss = require( './tasks/_compile-postcss' );

describe( '_postcss-output', () => {

	it( 'output has content', ( done ) => {
		let stream = compilePostcss( gulp, postcss, {
			source: './src/styles/main.css',
			build: './build/styles'
		}, preprocessors );

		stream.on( 'end', () => {
			let dir = path.resolve( './build/styles' );

			fs.readdirAsync( dir )
				.then( ( results ) => {
					expect( results.indexOf( 'index.js' ) ).toBeGreaterThan( 0 );
				});
		})
	});

});