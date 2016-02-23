var helpers = require( '../config/helpers' );
var Vote = require( './votes' );
var suController = require( '../sessions_users/sessions_usersController' );
var mController = require( '../movies/moviesController' );

var getAllVotes = function() {};

var addVote = function( req, res ) {
  // if req.body contains a session_user_id,
  // use that.
  var session_user = parseInt( req.body.session_user_id );
  var movie = parseInt( req.body.movie_id );
  var vote = req.body.vote == 'true';
  if( !session_user ) {
    // Otherwise, if req.body contains user_id AND session_id,
    // look up the session_user_id from those
    var user = parseInt( req.body.user_id );
    var session = parseInt( req.body.session_id );

    if( user && session ) {
     Session_User.getSessionUserBySessionIdAndUserId( session, user )
     .then( function( sessionUser ) {
        session_user = sessionUser.id;
        if( !session_user ) {
          // Could not find the given user in the given session
          res.status( 404 );
          res.send();
          return;
        }
      });
    }
  } else if( !movie ) {
    res.status( 400 );
    res.send( 'No movie ID provided' );
    return;
  }
  Vote.addVote( session_user, movie, vote )
  .then( function( data ) {
    // add vote to database
    // return 201 created
    matchHandler(); // refactor as necessary
    res.status( 201 );
    res.json( data );
  }, function( err ) {
    helpers.errorHandler( err );
  })
};

var matchHandler = function() {
    // check if there is a match in current session
    // if so, send socket event to inform users of match
};

var getSessMovieVotes = function( req, res, next ) {
  // expects req.params.session_id
  // expects req.params.movie_id
  // res.json an array of vote objects,
  // Where each object represents a row in the
  // Votes table
  /* STUB FOR TESTING, REMOVE WHEN THIS FUNCTION IS IMPLEMENTED */
  var sessionId = req.params.session_id;
  var movieId = req.params.movie_id;
  Vote.getSessMovieVotes( sessionId, movieId )
  .then( function( voteData ) {
    res.json( voteData );
  }, function( err ) {
    helpers.errorHandler( err );
  })
  /* END STUB */
};

var checkMatch = function( req, res, next ) {
  // Given a session and a movie,
  // We should know whether there is currently a match
  // # of yes votes for a given movie = # of users
  // Respond with movie object if there is a match,
  // Otherwise respond with false
  var sessionID = req.params.session_id;
  var movieID = req.params.movie_id;
  // get number of users in session
  // We are overriding the json method on the response object that our suController receives so that we have 
  // access to the object it gives us in this scope.
  suController.countUsersInOneSession( req, { json: function( userCount ) { // assume this function expects req.params.session_id
    // get votedata
    getSessMovieVotes( sessionID, movieID )
    .then( function( voteData ) {
      // check if votedata is an array
      if( Array.isArray( voteData ) ) {
        // if so, compare # of users to array.length. If they are the same,
        if( voteData.length === userCount ) {
          // reduce votedata array to see if all are true
          var matched = voteData.reduce( function( memo, curr ) {
            if( curr.vote === false ) {
              memo = false;
            }
            return memo;
          }, true);
          // if they are all true
          if( matched ) {
            // get movie object for the movie id
            // return movie object
            mController.getMovie( req, res ); // pass response object to mController so it can res.send movie data
          } else { // did not match
            res.json( false );
          } // end if ( matched )
        } else { // voteData.length !== userCount
          res.json( false );
        } // end if ( voteData.length === userCount )
      } else { // voteData is not an array
        res.json( false );
      } // end if ( isArray )
    } );
  } } );
  

}



module.exports = {

  getAllVotes: getAllVotes,
  addVote: addVote,
  getSessMovieVotes: getSessMovieVotes,
  checkMatch: checkMatch
  
};
