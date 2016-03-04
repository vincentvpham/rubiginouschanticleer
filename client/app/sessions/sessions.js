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
    Session.createSession( creator, $scope.handleCreate );
    // $scope.joinSession( $scope.sessionName );
  };
  $scope.joinSession = function( sessionId ) { // from a given session in the view, or from creation
    Session.joinSession( sessionId, $scope.username, $scope.handleJoin );
  };

  $scope.handleCreate = function( error, sessionId ) {
    //this function handles a create event to the socket.
    if (error) {
      console.error("error from Session.createSession");
    } else {
      console.log("inside $scope.handleCreate, sessionId:", sessionId);
      Socket.emit( 'session', {sessionId : sessionId} );
      $scope.joinSession(sessionId);
    }
  };
  $scope.handleJoin = function( error, username, sessionId ) {
    //this function handles a new join event to the socket.
    if (error) {
      $scope.invalidInput = true;
    } else {
      $scope.invalidInput = false;
      Session.setSession(sessionId);
      Socket.emit( 'newJoin', {username: username, sessionId: sessionId} );
    }
  };

} );
