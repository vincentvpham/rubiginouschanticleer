angular.module( 'moviematch.sessions', [] )

.controller( 'SessionsController', function( $scope, Session, Auth, Socket ) {

  // TODO: these two will need to be removed and created in a different controller
  //$scope.user = {};
  //$scope.user.name = "Julie";
  $scope.username = '';
  $scope.username += Auth.getUserName();
  // TODO: this will need to be pulled from the api
  $scope.sessions = {};
  $scope.sessionName = '';

  $scope.fetchSessions = function() {
    Session.fetchSessions().then( function(sessions) {
      $scope.sessions = sessions;
    } );
  }

  $scope.fetchSessions();

  // TODO: Create functions to make buttons work
  $scope.setSession = Session.setSession;
  $scope.createSession = Session.createSession;
  $scope.joinSession = Session.joinSession;
  $scope.sessionName = Session.getSession();
  Socket.emit('session', {sessionName : $scope.sessionName} ) 

  
} );
