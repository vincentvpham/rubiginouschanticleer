angular.module( 'moviematch.lobby', [] )

.controller( 'LobbyController', function( $scope, Session, Lobby ) {
  //$scope.sessionName = Session.getSession();
  $scope.sessionName = "Wine Night";

  $scope.getUsersInOneSession = function() {
    Lobby.getUsersInOneSession($scope.sessionName);
  }

  $scope.getUsersInOneSession();    
} )