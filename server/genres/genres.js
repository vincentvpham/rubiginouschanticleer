var db = require( '../config/db' );
var Sequelize = require( 'sequelize' );

var Genre = db.define( 'genres',  {
	genreName : Sequelize.STRING
} );

Genre.sync().then( function() {
  console.log( "genres table created" );
} )
.catch( function( err ) {
  console.error( err );
} );

module.exports = Genre;
