var Vote = require( './votes' );

module.exports = {

  getAllVotes: function() {},

  addVote: function( req, res, next ) {
    console.log( 'TESTING: addVote', req.body );
    res.send( 'TESTING: vote added' );
  }
  
};
