var helpers = require( '../config/helpers' );
var Session_User = require( './sessions_users' );
var Session = require( '../sessions/sessions' );
var User = require( '../users/users' )
module.exports = {

  getUsersInOneSession: function( req, res, next ) {
    var sessionName = req.params.sessionName.slice(1);
    Session.findOne( {where: {sessionName: sessionName}} )
    .then( function(session) {
      Session_User.findAll( {where: {session_id: session.id}} )
      .then( function(sessions_users) {
        var users = [];
        for(var i = 0; i < sessions_users.length; i++){
          users.push(sessions_users[i].dataValues.user_id);
        }
        User.findAll( {where: {id: {$in: users}}} )
        .then( function(users) {
          res.send(users);
        } )
      } )
    } )
  },

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
          res.send(session_user);
        });
      });
   });
  }
};
