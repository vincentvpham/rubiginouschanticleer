var db = require( '../config/db' );
var Sequelize = require( 'sequelize' );

var Genre = db.define( 'genres',  {
	genreName = Sequelize.STRING
} );

Genre.sync();

module.exports = Genre;
