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

Vote.addVote = function( sessionUser, movie, vote ) {
  return Vote.create( { session_user_id: sessionUser, movie_id: movie, vote: vote } );
};

module.exports = Vote;
