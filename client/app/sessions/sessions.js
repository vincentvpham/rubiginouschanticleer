angular.module( 'moviematch.sessions', [] )

.controller( 'SessionsController', function( $scope ) {
  // TODO: these two will need to be removed and created in a different controller
  $scope.user = {};
  $scope.user.name = "Julie";

  // TODO: this will need to be pulled from the api
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
      name: "Comedy Clubb'n"
    }

  ];

  // TODO: Create functions to make buttons work
  $scope.createSession = function () {};
  $scope.joinSession = function () {};
} );
