angular.module( 'moviematch.lobbyServices', [] )

.factory( 'Lobby', function( $http ) {
  return {
    getUsersInOneSession: function( sessionId ) {
      return $http.get( '/api/sessions/users/' + sessionId )
      .then( function( res ) {
        return res.data;
      } ,
      function( err ) {
        console.error( err );
      } );
    }
  }
});
