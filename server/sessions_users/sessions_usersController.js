var Session_User = require( './sessions_users' );

module.exports = {

  getUsersInOneSession: function() {},

  countUsersInOneSession: function( req, res, next ) {
    // expects req.params.session_id
    res.send( 2 ); // This should be number of users when properly implemented.
  },

  addOneUser: function() {}

};
