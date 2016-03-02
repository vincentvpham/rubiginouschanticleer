var db = require( '../config/db' );
var Sequelize = require( 'sequelize' );

var Session = db.define( 'sessions', {
  creator : Sequelize.STRING,
  code: Sequelize.STRING
} );

Session.sync().then( function() {
  console.log( "sessions table created" );
} )
.catch( function( err ) {
  console.error( err );
} );

module.exports = Session;
