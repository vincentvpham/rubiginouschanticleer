var helpers = require( '../config/helpers' );
var Session = require( './sessions' );

module.exports = {

  getAllSessions: function( reqw, res, next ) {
    Session.findAll()
    .then( function( sessions ) {
      response.send( sessions );
    })
  },

  addSession: function( req, res, next ) {
    var sessionName = request.body.sessionName;

    Session.create( {
      sessionName: sessionName
    } ).then( function() {
      response.status = 201;
      response.end();
    } )
  },

  getSessionByName: function( req, res, next ) {
    var sessionName = request.params.sessionName;

    Session.findOne( { where: { sessionName: sessionName } } )
    .then( function( session ) {
      response.json( session );
    }, function( err ) {
      helpers.errorHandler( err, request, response, next );
    });
  }
  
};
