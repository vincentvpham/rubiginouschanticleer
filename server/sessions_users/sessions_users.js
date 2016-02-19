var db = require( '../config/db' );
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

module.exports = Session_User; 
