var db = require( '../config/db' );
var helpers = require( '../config/helpers' );
var Sequelize = require( 'sequelize' );
var Movie = require( '../movies/movies' );
var Session = require( '../sessions/sessions' );


var Session_Movie = db.define( 'sessions_movies', {
  movie_id: {
    type: Sequelize.INTEGER,
    unique: 'session_movie_idx'
  },
  session_id: {
    type: Sequelize.INTEGER,
    unique: 'session_movie_idx'
  }
} );

Session_User.sync().then( function(){
  console.log("sessions_users table created");
} )
.catch( function( err ){
  console.error(err);
} );

Session_Movie.belongsTo( Movie, {foreignKey: 'movie_id'} );
Session_Movie.belongsTo( Session, {foreignKey: 'session_id'} );


module.exports = Session_Movie; 