var db = require( '../config/db' );
var Sequelize = require( 'sequelize' );

var User = db.define( 'users', {
	username : Sequelize.STRING;
	password : Sequelize.STRING;
} );

User.sync();

module.exports = User;