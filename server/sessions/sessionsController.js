var Session = require( './sessions' );

module.exports = {

  getAllSessions: function() {},

  addSession: function(request, response) {
    var sessionName = request.body.sessionName;

    Session.create( {
      sessionName: sessionName
    } ).then( function() {
      response.status = 200;
      response.end();
    } )
  }
  
};
