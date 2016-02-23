var Session_User = require( './sessions_users' );
var Session = require( '../sessions/sessions' );
var User = require( '../users/users' )
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

  addOneUser: function(req, res, next) {
    var username = req.body.username;
    var sessionName = req.body.sessionName;
    console.log(sessionName);

    User.findOne( {where: {username : username}} )
    .then( function( user ) {
      Session.findOne( {where: {sessionName : sessionName}} )
      .then( function( session ) {
        Session_User.create( {
          user_id: user.id,
          session_id: session.id
        } ).then( function( session_user ) {
          //console.log(session_user);
        });
      });
   });
  }

};
