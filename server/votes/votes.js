var db = require( '../config/db' );
var Sequelize = require( 'sequelize' );
var Session_User = require( '../sessions_users/sessions_users' );


var Vote = db.define( 'votes', {
  session_user_id : Sequelize.INTEGER,
  movie_id : Sequelize.INTEGER,
  vote : Sequelize.BOOLEAN
} );

Vote.sync().then( function() {
  console.log( "votes table created" );
} )
.catch( function( err ) {
  console.error( err );
} );

Vote.belongsTo( Session_User, {foreignKey: 'session_user_id'} );

module.exports = Vote;
