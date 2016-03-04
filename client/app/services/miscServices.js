angular.module( 'moviematch.miscServices', [] )

.factory( 'FetchMovies', function( $http ) {
  return {

   getMovies: function (sessionId) {
     return $http.post(
       '/api/movies/',
       {sessionId: sessionId})
      .then( function( res ) {
        return res.data;
      }, function ( err ) {
        console.error( err );
      });
    },

    getNext10Movies: function( packageNumber ) {
      return $http.get( '/api/movies/package/' + packageNumber )
      .then( function( res ) {
        return res.data;
      },
      function( err ) {
        console.error( err );
      } );
    }

  };
})

.factory( 'Socket', ['socketFactory', function(socketFactory){
  return socketFactory();
}])

.factory( 'Movies', function ($http) {
  return {
    searchMovies: function (query) {
      return $http.post(
       '/api/movies/search/',
        {query: query}
      )
      .then( function (res) {
        return res.data;
      },
      function (err) {
        console.log(err);
      });
    },

    saveMovie: function ( movie, sessionId ) {
      return $http.post(
        '/api/movies/save/',
        {
          movie: movie,
          sessionId: sessionId
        })
      .then( function( res ) {
        console.log('Movie successfully saved', res.data);
        return res.data;
      },
      function ( err ) {
        console.log('Error saving movie', err);
      });
    }
  };
});
