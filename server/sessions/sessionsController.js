var helpers = require( '../config/helpers' );
var Session = require( './sessions' );

module.exports = {

  getAllSessions: function( req, res, next ) {
    Session.findAll()
    .then( function( sessions ) {
      res.send( sessions );
    });
  },

  addSession: function( req, res, next ) {
    var creator = req.body.creator;

    Session.create( {
      creator: creator
    } )
    .then( function( response ) {
      var sessionId = response.dataValues.id;
      var sessionCode = helpers.generateGroupCode( 4, sessionId );
      // find session created to update
      Session.findOne( { where: { id: sessionId } } )
      .then( function( session ) {
        // update session afterwards because id is created when row is created
        session.update( {
          code: sessionCode
        } )
        res.status = 201;
        res.send( sessionId.toString() );
        res.end();
      } )
    }, function( err ) {
      console.log( "got an error in sessionsController.addSession:", err );
      helpers.errorHandler( err, req, res, next );
    } );
  },

  getSessionById: function( req, res, next ) {
    var sessionId = req.params.sessionId;

    Session.findOne( { where: { id: sessionId } } )
    .then( function( session ) {
      res.json( session );
    }, function( err ) {
      helpers.errorHandler( err, req, res, next );
    });
  }

};
