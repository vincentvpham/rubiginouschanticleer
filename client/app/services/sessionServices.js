angular.module( 'moviematch.sessionServices', [] )

.factory( 'Session', function( $http, $window, $location ) {
  return {
    createSession: function( creator, callback ) {
      return $http.post( '/api/sessions', { creator: creator } )
      .then( function( response ) {
        console.log("in createSession, response.data:", response.data);
        callback( creator ); // used for emitting session data
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
      } );
    },

    joinSession: function( sessionId, username, callback ) {
      return $http.post( '/api/sessions/users', { sessionId: sessionId, username: username } )
      .then( function( response ) {
        callback( username, sessionId ); // used for emitting session data
        $location.path( '/lobby' );
        return response;
      }, function( err ) {
        console.error( err );
      } );
    },

    setSession: function( sessionId ) {
      $window.localStorage.setItem( 'sessionId', sessionId );
    },

    getSession: function() {
      var sessionId = $window.localStorage.getItem( 'sessionId' );
      return $http.get( '/api/sessions/' + sessionId )
      .then( function( session ) {
        return session.data;
      }, function( err ) {
        console.error( err );
      });
    }

  }
});
