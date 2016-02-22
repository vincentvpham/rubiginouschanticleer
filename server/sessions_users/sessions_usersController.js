var Session_User = require( './sessions_users' );

module.exports = {

  getUsersInOneSession: function() {},

  countUsersInOneSession: function( req, res, next ) {
    // expects req.params.session_id

    /* STUB FOR TESTING, REMOVE WHEN THIS FUNCTION IS IMPLEMENTED */
    if( req.params.session_id == 1 ) {
      res.json( 2 );
    } else {
      res.json( 0 );
    }
    /* END STUB */
  },

  addOneUser: function() {}

};
