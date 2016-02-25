angular.module( 'moviematch.lobby', [] )

.controller( 'LobbyController', function( $scope, Session, Lobby, Socket, $location, Auth ) {
  $scope.sessionName = Session.getSession();
  $scope.username = Auth.getUserName();
  $scope.users = [];

  Lobby.getUsersInOneSession($scope.sessionName)
  .then( function( users ){
    $scope.users = users;
  } ); 

  //this function is listening to any newUser event and recieves/appends the new user
  Socket.on('newUser', function(data) {
    $scope.users.push(data);
  } );

  $scope.startSession = function(sessionName) {
    Socket.emit('startSession', {sessionName: sessionName} );
  };

  Socket.on('sessionStarted', function() {
    $location.path('/match');
  } );

} )
