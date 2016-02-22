var helpers = require( '../config/helpers' );
var Vote = require( './votes' );
var suController = require( '../sessions_users/sessions_usersController' );
var mController = require( '../movies/moviesController' );

var getAllVotes = function() {};

var addVote = function( req, res, next ) {
  console.log( 'TESTING: addVote', req.body );
  res.send( 'TESTING: vote added' );
  // add vote to database
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
  if( req.params.movie_id == 2 ) {
    res.json( [{vote: true}, {vote: false}] ); // some test data
  } else if ( req.params.movie_id == 1 ) {
    res.json( [{vote: true}, {vote: true}] );
  } else {
    res.json( null );
  }
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
  suController.countUsersInOneSession( req, { json: function( userCount ) { // assume this function expects req.params.session_id
    // get votedata
    getSessMovieVotes( req, { json: function( voteData ) { // assume this function expects req.params.session_id & req.params.movie_id
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
    } } );
  } } );
  

}



module.exports = {

  getAllVotes: getAllVotes,
  addVote: addVote,
  getSessMovieVotes: getSessMovieVotes,
  checkMatch: checkMatch
  
};
