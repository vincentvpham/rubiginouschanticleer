angular.module( 'moviematch.add', [] )
.controller( 'AddController', function( $scope, Session, Lobby, Socket, $location, Auth, Movies, FetchMovies ) {
  $scope.session = {};
  $scope.movies = [];
  $scope.search = false;
  $scope.genreSearch = false;
  $scope.genres = [{name: 'comedy'}];

  $scope.getGenreMovies = function(genre) {
    FetchMovies.getGenreMovies(genre);
  };

  Session.getSession()
  .then( function( session ) {
    $scope.session = session;
    console.log('GET SESSION and scope.session', $scope.session);
  });

  $scope.searchMovies = function () {
    if($scope.query.replace(/\s/g, '') !== ''){
      Movies.searchMovies($scope.query)
      .then( function (data) {
        console.log('here the data data data', data);
        $scope.updateMovieResults(data);
      });
    } else {
      $scope.results = [];
    }
  };

  $scope.updateMovieResults = function (data) {
    $scope.results = data.results;
  };

  $scope.addToQueue = function (movie) {
    console.log('movie from addToQueue function: SOCKET1', movie);
    console.log('SESSION', $scope.session);
    Socket.emit( 'addMovie', {sessionId: $scope.session.id, movie: movie} );
    Movies.saveMovie(movie, $scope.session.id);
  };

  $scope.startSession = function (sessionId) {
    $location.path( '/match' );
  };

  Socket.on( 'newMovie', function( data ) {
      console.log(data);
      $scope.movies.push( data );
  });

});