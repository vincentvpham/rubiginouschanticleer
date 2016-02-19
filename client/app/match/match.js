angular.module( 'moviematch.match', [] )

.controller( 'MatchController', function( $scope, Match ) {
  $scope.movie = {};
  $scope.session = {};
  $scope.user = {};

  $scope.user.name = "Julie";

  $scope.session.name = "Girls Night Out";

  $scope.movie = {
    name: "Gone With The Wind",
    year: "1939",
    rating: "G",
    runtime: "3h 58m",
    genres: [ "Drama", "Romance", "War" ],
    country: "USA",
    poster_path: "https://www.movieposter.com/posters/archive/main/30/MPW-15446",
    summary: "A manipulative southern belle carries on a turbulent affair with a blockade runner during the American Civil War.",
    director: "Victor Fleming",
    cast: "Clark Cable, Vivian Leigh, Thomas Mitchell"
  }

  $scope.yes = function() { Match.sendVote( $scope.session.id, $scope.user.id, $scope.movie.id, true ); }
  $scope.no = function() { Match.sendVote( $scope.session.id, $scope.user.id, $scope.movie.id, false ); }
} );
