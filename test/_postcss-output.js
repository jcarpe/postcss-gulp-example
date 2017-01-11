'use strict';

let Promise = require( 'bluebird' ),
	fs = Promise.promisifyAll( require( 'fs' ) ),
	path = require( 'path' );