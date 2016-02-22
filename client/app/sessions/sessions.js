angular.module( 'moviematch.sessions', [] )

.controller( 'SessionsController', function( $scope, Session ) {
  // TODO: these two will need to be removed and created in a different controller
  $scope.user = {};
  $scope.user.name = "Julie";

  // TODO: this will need to be pulled from the api
  $scope.sessions = {};

  $scope.fetchSessions = function() {
    Session.fetchSessions().then( function(sessions) {
      console.log(sessions);
      $scope.sessions = sessions;
    } );
  }

  $scope.fetchSessions();

  // TODO: Create functions to make buttons work
  $scope.createSession = Session.createSession;
  $scope.joinSession = function ($index) {};
} );
