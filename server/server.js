var express = require( 'express' );
var db = require( './config/db' );

var app = express();

const PORT = 8000;

require( './config/middleware' )( app, express );
require( './config/routes' )( app, express );

app.listen( PORT );
console.log( 'Listening on port ' + PORT );

module.exports = app;
