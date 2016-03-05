angular.module( 'moviematch.add', [] )
.controller( 'AddController', function( $scope, Session, Lobby, Socket, $location, Auth, Movies, FetchMovies ) {
  $scope.session = {};
  $scope.movies = [];
  $scope.search = false;
  $scope.genreSearch = false;
  $scope.users = [];
  $scope.doneUsers = 0;
  $scope.loading = false;
  $scope.preLoading = true;
  var _ = window._;
  $scope.imgPath = 'http://image.tmdb.org/t/p/w500';
  $scope.genreMovies = [];
  $scope.genres = [
  {
    name: 'comedy',
    id: 35
  },
  {
    name: 'action',
    id: 28
  }];

  $scope.getGenreMovies = function(genre) {
    console.log('in scope get genre with this genre: ', genre);
    FetchMovies.getGenreMovies(genre)
    .then( function (movies) {
      $scope.genreMovies = movies.results;
    }, function ( err ) {
      console.error( 'Error retrieving genre movies', err);
    });
  };

  Session.getSession()
  .then( function( session ) {
    $scope.session = session;
    Lobby.getUsersInOneSession($scope.session.id)
    .then( function (users){
      $scope.users = _.map(users, function(user) {
        return user.username;
      });
      console.log('GET USERS IN SESSION ', $scope.users);
    });
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
    // console.log('movie from addToQueue function: SOCKET1', movie);
    // console.log('SESSION', $scope.session);
    Socket.emit( 'addMovie', {sessionId: $scope.session.id, movie: movie} );
    Movies.saveMovie(movie, $scope.session.id);
  };

  $scope.startSession = function (sessionId) {
    $location.path( '/match' );
  };

  $scope.userDone = _.once(function () {
    $scope.preLoading = false;
    $scope.loading = true;
    Socket.emit( 'doneUser', {sessionId: $scope.session.id} );
  });

  Socket.on( 'newMovie', function( data ) {
      //console.log(data);
      $scope.movies.push( data );
  });

  Socket.on( 'newUser', function ( data ) {
    $scope.doneUsers++;
    if($scope.doneUsers === $scope.users.length){
      $location.path( '/match' );
    }
  });

});