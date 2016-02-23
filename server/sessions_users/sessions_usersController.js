var helpers = require( '../config/helpers' );
var Session_User = require( './sessions_users' );

module.exports = {

  getUsersInOneSession: function() {},

  countUsersInOneSession: function( req, res, next ) {
    // expects req.params.session_id
    var sessionId = parseInt( req.params.session_id );
    Session_User.countUsersInOneSession( sessionId )
    .then( function( count ) {
      res.json( count );
    }, function( err ) {
      helpers.errorHandler( err );
    });
  },

  addOneUser: function() {},

  getSessionUserBySessionAndUser: function( req, res, next ) {
    // expects req.params.session_id
    // expects req.params.user_id
    // responds with data for that user in that session

    /* STUB FOR TESTING REMOVE WHEN THIS FN IS IMPLEMENTED */
    res.json( { id: 1, user_id: 1, session_id: 1} );
    /* END STUB */
  },

};
