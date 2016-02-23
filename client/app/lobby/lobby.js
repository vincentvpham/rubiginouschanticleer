angular.module( 'moviematch.lobby', [] )

.controller( 'LobbyController', function( $scope, Session, Lobby ) {
  $scope.sessionName = Session.getSession();
  $scope.users = [];

  Lobby.getUsersInOneSession($scope.sessionName)
  .then( function( users ){
    $scope.users = users;
  } );

} )