angular.module( 'moviematch.sessions', [] )

.controller( 'SessionsController', function( $scope, Session, Auth, Socket ) {
  // TODO: these two will need to be removed and created in a different controller
  // $scope.username = '';
  $scope.username = Auth.getUserName();
  // TODO: this will need to be pulled from the api
  $scope.sessions = [];

  $scope.sessionName = '';

  $scope.fetchSessions = function() {
    Session.fetchSessions().then( function( sessions ) {
      $scope.sessions = sessions;
    } );
  };

  $scope.fetchSessions();
  //this function listens to a event emitted by server.js-'new session' and recieves and appends the new session
  Socket.on( 'newSession', function( data ) {
    $scope.sessions.push( data );
  });

  // TODO: Create functions to make buttons work
  $scope.setSession = Session.setSession;
  $scope.createSession = function(creator) {
    Session.createSession( creator, $scope.emitCreate );
    // $scope.joinSession( $scope.sessionName );
  };
  $scope.joinSession = function( sessionId ) { // from a given session in the view, or from creation
    console.log('the sessionId from joinSession fn', sessionId);
    console.log('$scope.username', $scope.username);
    Session.setSession( sessionId );
    Session.joinSession( sessionId, $scope.username, $scope.emitJoin );
  };

  $scope.emitCreate = function( sessionId ) {
    //this function emits a create event to the socket.
    console.log("inside $scope.emitCreate, sessionId:", sessionId);
    Socket.emit( 'session', {sessionId : sessionId} );
  };
  $scope.emitJoin = function( username, sessionId ) {
    //this function emits a new join event to the socket.
    Socket.emit( 'newJoin', {username: username, sessionId: sessionId} );
  };

} );
