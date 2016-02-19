angular.module( 'moviematch.sessions', [] )

.controller( 'SessionsController', function( $scope ) {
  $scope.movie = {};
  $scope.session = {};
  $scope.user = {};

  $scope.user.name = "Julie";


  $scope.sessions = [
    {
      id: 1,
      name: "Girls Night Out"
    },
    {
      id: 2,
      name: "Boyz Night"
    },
    {
      id: 3,
      name: "Movie Marathon"
    },
    {
      id: 4,
      name: "Comedy Clubbin'"
    }

  ];

  $scope.createSession = function () {};
} );
