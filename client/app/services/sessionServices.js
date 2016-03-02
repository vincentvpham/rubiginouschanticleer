angular.module( 'moviematch.sessionServices', [] )

.factory( 'Session', function( $http, $window, $location ) {
  return {
    createSession: function( creator, callback ) {
      return $http.post( '/api/sessions', { creator: creator } )
      .then( function( response ) {
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

    joinSession: function( creator, username, callback ) {
      return $http.post( '/api/sessions/users', { creator: creator, username: username } )
      .then( function( response ) {
        callback( username, creator ); // used for emitting session data
        $location.path( '/lobby' );
        return response;
      }, function( err ) {
        console.error( err );
      } );
    },

    setSession: function( creator ) {
      $window.localStorage.setItem( 'sessionName', creator );
    },

    getSession: function() {
      var sessionName = $window.localStorage.getItem( 'sessionName' );
      return $http.get( '/api/sessions/' + sessionName )
      .then( function( session ) {
        return session.data;
      }, function( err ) {
        console.error( err );
      });
    }

  }
});
