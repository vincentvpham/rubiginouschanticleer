var db = require( '../config/db' );
var Sequelize = require( 'sequelize' );

var Pref = db.define( 'prefs', {
	user_id : Sequelize.INTEGER,
	genre_id : Sequelize.INTEGER,
	prefs : Sequelize.INTEGER
} );

Pref.sync();

module.exports = Pref;
