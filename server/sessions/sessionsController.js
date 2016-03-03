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
    // var code = helpers.generateGroupCode();

    Session.create( {
      creator: creator,
      code: 'AAAA'
    } ).then( function(response) {
      res.status = 201;
      var sessionId = response.dataValues.id.toString();
      console.log('THIS IS OUR SESSION ID', sessionId);
      res.send(sessionId);
    }, function(err) {
      console.log("got an error in sessionsController.addSession:", err);
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
