angular.module( 'moviematch.services', [] )

.factory( 'Auth', function( ) {} )

.factory( 'Session', function( $http ) {
  return {
    createSession: function( sessionName ) {
      return $http.post( '/api/sessions', { sessionName: sessionName } )
      .then( function( response ) {
        return response;
      }, function( err ) {
        console.error( err );
      } );
    },

    fetchSessions: function() {
      return $http.get ( '/api/sessions' )
      .then( function( response ) {
        return response.data;
      }, function( err ) {
        console.error( err );
      } ) 
    }
  }
} )

.factory( 'Match', function( $http ) {
  return {
    sendVote: function( sessionID, userID, movieID, vote ) {
      return $http.post( // returns a promise; if you want to make use of a callback simply use .then on the return value.
        '/api/votes', // expect this endpoint to take a json object
                                      // with sessionID and userID
                                      // OR sessionuserID
                                      // AND movieID
                                      // AND vote (boolean true/false where true is yes and false is no)
        { sessionID: sessionID, userID: userID, movieID: movieID, vote: vote })
      .then( function( response ) { // if the promise is resolved
        return response;
      },
      function( err ) { // if the promise is rejected
        console.error( err );
      } );
    }
  }
} );
