var Vote = require( './votes' );

module.exports = {

  getAllVotes: function() {},

  addVote: function( req, res, next ) {
    console.log( 'TESTING: addVote', req.body );
    res.send( 'TESTING: vote added' );
    // add vote to database
    // check if there is a match in current session
      // if so, send socket event to inform users of match
  }
  
};
