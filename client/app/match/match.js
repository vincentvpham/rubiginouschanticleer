angular.module( 'moviematch.match', [] )

.controller( 'MatchController', function( $scope, Match, FetchMovies) {

  var currMovieIndex = 0;
  var currMoviePackage = 0;

  var fetchNextMovies = function( packageNumber ){         
    return FetchMovies.getNext10Movies( packageNumber )
      .then(function( data ){
        $scope.moviePackage = data;
      })
  };

  var loadNextMovie = function(){
    if( currMovieIndex === 9 ) {
      currMoviePackage++;
      fetchNextMovies( currMoviePackage )
        .then(function(){
          $scope.currMovie = $scope.moviePackage[0];
        })
      currMovieIndex = 0;
    }
    else {
      currMovieIndex++;
      $scope.currMovie = $scope.moviePackage[currMovieIndex];
    }
    
  };

  $scope.init = function() {        //as soon as the view is loaded request the first movie-package here
    fetchNextMovies( 0 )
      .then(function() {
        $scope.currMovie = $scope.moviePackage[0];
      })
  }
  $scope.init();

  $scope.session = {};
  $scope.user = {};

  $scope.user.name = "Julie";
  $scope.user.id = 1;

  $scope.session.name = "Girls Night Out";
  $scope.session.id = 1;

  $scope.currMovie = {
    name: "Gone With The Wind",
    year: "1939",
    rating: "G",
    runtime: "3h 58m",
    genres: [ "Drama", "Romance", "War" ],
    country: "USA",
    poster_path: "https://www.movieposter.com/posters/archive/main/30/MPW-15446",
    summary: "A manipulative southern belle carries on a turbulent affair with a blockade runner during the American Civil War.",
    director: "Victor Fleming",
    cast: "Clark Cable, Vivian Leigh, Thomas Mitchell",
    id: 1
  }
  

  $scope.yes = function() { Match.sendVote( $scope.session.id, $scope.user.id, $scope.movie.id, true ); }
  $scope.no = function() { Match.sendVote( $scope.session.id, $scope.user.id, $scope.movie.id, false ); }
} );
