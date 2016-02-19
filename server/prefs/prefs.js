var db = require( '../config/db' );
var Sequelize = require( 'sequelize' );
var User = require( '../users/users' );
var Genre = require( '../genres/genres' );

var Pref = db.define( 'prefs', {
	user_id : Sequelize.INTEGER,
	genre_id : Sequelize.INTEGER,
	prefs : Sequelize.INTEGER
} );

Pref.sync().then( function() {
  console.log( "prefs table created" );
} )
.catch( function( err ) {
  console.error( err );
} );

Pref.belongsTo( User, {foreignKey: 'user_id'} );
Pref.belongsTo( Genre, {foreignKey: 'genre_id'} );

module.exports = Pref;
