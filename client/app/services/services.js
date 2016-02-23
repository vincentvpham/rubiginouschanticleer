angular.module( 'moviematch.services', [] )

.factory( 'Auth', function( $http, $location, $window ) {
  var username = '';
  return {
    signin : function( user ) {
      return $http.post( '/api/users/signin', user )
      .then(function ( resp ) {
        return resp.data.token;
      });
    },

    signup : function( user ) {
      return $http.post( '/api/users/signup', user )
      .then(function( resp ) {
        return resp.data.token;
      })
      .catch(function( err ) {
        console.log(err);
      });
    },

    isAuth : function() {
      return !!$window.localStorage.getItem( 'com.moviematch' );
    },

    signout : function() {
      $window.localStorage.removeItem( 'com.moviematch' );
    }, 

    setUserName : function( user ) {
      $window.localStorage.setItem( 'username', user.username );
    },

    getUserName : function () {
      return $window.localStorage.getItem( 'username' );
    }
  } 
} )

.factory( 'Session', function( $http, $window, $location ) {
  return {
    createSession: function( sessionName, callback ) {
      return $http.post( '/api/sessions', { sessionName: sessionName } )
      .then( function( response ) {
        location.path('/lobby');
        callback( sessionName );
        return response;
      }, function( err ) {
        console.error( err );
      } );
    },

    broadcastSession: function( sessionName ) {

    },

    fetchSessions: function() {
      return $http.get ( '/api/sessions' )
      .then( function( response ) {
        return response.data;
      }, function( err ) {
        console.error( err );
      } ); 
    }, 

    joinSession: function( sessionName, username, callback ) {
      return $http.post( '/api/sessions/users', { sessionName: sessionName, username: username } )
      .then( function(resonse) {
        $location.path('/lobby');
        callback( username, sessionName );
        return response;
      }, function( err ) {
        console.error( err );
      } );
    },

    setSession: function( sessionName ) {
      console.log(sessionName);
      $window.localStorage.setItem( 'sessionName', sessionName );
    }, 

    getSession: function() {
      return $window.localStorage.getItem( 'sessionName' );
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
        { session_id: sessionID, user_id: userID, movie_id: movieID, vote: vote })
      .then( function( response ) { // if the promise is resolved
        return response;
      },
      function( err ) { // if the promise is rejected
        console.error( err );
      } );
    }
  }
} )

.factory( 'Lobby', function( $http ) {
  return {
    getUsersInOneSession: function( sessionName ) {
      return $http.get('/api/sessions/:' + sessionName)
      .then( function(  res ) {
        return res.data;
      } , 
      function( err ) {
        console.error( err );
      } );
    }
  }
})

.factory( 'Socket', ['socketFactory', function(socketFactory){
  return socketFactory();
}]);
