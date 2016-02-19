var db = require( '../config/db' );
var Sequelize = require( 'sequelize' );

var Session = db.define( 'sessions', {
	sessionName = Sequelize.STRING
} );

Session.sync();

module.exports = Session;
