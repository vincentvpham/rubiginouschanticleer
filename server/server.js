var express = require( 'express' );
var db = require( './config/db' );

var app = express();

var http = require( 'http' ).Server(app);
var io = require( 'socket.io' )( http );

io.on( 'connect' , function( socket ){
  console.log( 'we are connected!!' );
  socket.on( 'disconnect', function() {
    console.log( 'were not connected anymore' );
  });
  socket.on('session', function(data) {
    console.log("we in this bitch", data);
  } )

});

const PORT = 8000;

require( './config/middleware' )( app, express );
require( './config/routes' )( app, express );

http.listen( PORT );
console.log( 'Listening on port ' + PORT );



module.exports = app;
