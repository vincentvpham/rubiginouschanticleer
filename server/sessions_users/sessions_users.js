var db = require( '../config/db' );
var helpers = require( '../config/helpers' );
var Sequelize = require( 'sequelize' );
var User = require( '../users/users' );
var Session = require( '../sessions/sessions' );

var Session_User = db.define( 'sessions_users', {
	user_id : Sequelize.INTEGER,
	session_id : Sequelize.INTEGER
} );

Session_User.sync().then( function(){
  console.log("sessions_users table created");
} )
.catch( function( err ){
  console.error(err);
} );

Session_User.belongsTo( User, {foreignKey: 'user_id'} );
Session_User.belongsTo( Session, {foreignKey: 'session_id'} );

Session_User.getSessionUserBySessionIdAndUserId = function( sessionID, userID ) {
  /* TEST DATA */
  // expect a promise
  return { then: function( resolve ) {
    resolve( { id: 1 } );
  }};

  /* END TEST DATA */
  return Session_User.findOne({where: {session_id: sessionID, user_id: userID} })
    .catch( function( err ) {
      helpers.errorLogger( err );
    });
};

Session_User.countUsersInOneSession = function( sessionID ) {
  /* STUB FOR TESTING, REMOVE WHEN THIS FUNCTION IS IMPLEMENTED */
  return {
    then: function( resolve ) {
      if( sessionID == 1 ) {
        resolve( 2 );
      } else {
        resolve( 0 );
      }
    }
  }
  /* END STUB */
};

module.exports = Session_User; 
