angular.module( 'moviematch.match', ['moviematch.services'] )

.controller( 'MatchController', function( $scope, Match, Auth, Session, FetchMovies ) {
  $scope.session = {};
  $scope.user = {};
  $scope.imgPath = 'http://image.tmdb.org/t/p/w500';

  $scope.user.name = Auth.getUserName();
  //$scope.user.id = 1;

  $scope.session.name = Session.getSession();
  //$scope.session.id = 1;

  var currMovieIndex = 0;
  var currMoviePackage = 0;

  var fetchNextMovies = function( packageNumber, callback ){
    FetchMovies.getNext10Movies( packageNumber )
      .then(function( data ){
        console.log(data);
        $scope.moviePackage = data;
        callback();
      })
  };

  var loadNextMovie = function(){
    if( currMovieIndex === 9 ) {
      currMoviePackage++;
      fetchNextMovies( currMoviePackage, function() {
        $scope.currMovie = $scope.moviePackage[0];
        });
      currMovieIndex = 0;
    }
    else {
      currMovieIndex++;
      $scope.currMovie = $scope.moviePackage[currMovieIndex];
    }

  };

  $scope.init = function() {        //as soon as the view is loaded request the first movie-package here
    fetchNextMovies( 0 , function() {
        $scope.currMovie = $scope.moviePackage[0];
      })
  }
  $scope.init();

  $scope.yes = function() {
    Match.sendVote( $scope.session.name, $scope.user.name, $scope.currMovie.id, true );
    loadNextMovie();
  }
  $scope.no = function() {
    Match.sendVote( $scope.session.name, $scope.user.name, $scope.currMovie.id, false );
    loadNextMovie();
  }
} );
