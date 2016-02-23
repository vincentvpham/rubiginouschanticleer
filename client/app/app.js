angular.module( 'moviematch', [
  'moviematch.auth',
  'moviematch.match',
  'moviematch.prefs',
  'moviematch.sessions',
  'moviematch.services',
  'moviematch.showmatch',
  'moviematch.lobby',
  'ngRoute'
  ])

.config( function ( $routeProvider ) {
  $routeProvider
    .when( '/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'AuthController'
    })
    .when( '/signup', {
      templateUrl: 'app/auth/signup.html',
      controller: 'AuthController'
    })
    .when( '/signout', {
      templateUrl: 'app/auth/signout.html',
      controller: 'AuthController'
    })
    .when( '/match', {
      templateUrl: 'app/match/match.html',
      controller: 'MatchController'
    })
    .when( '/sessions', {
      templateUrl: 'app/sessions/joinsessions.html',
      controller: 'SessionsController'
    })
    .when( '/lobby', {
      templateUrl: 'app/lobby/lobby.html',
      controller: 'LobbyController'
    })
    .when( '/showmatch', {
      templateUrl: 'app/showmatch/showmatch.html',
      controller: 'ShowmatchController'
    })
    .otherwise({
      redirectTo: '/signin'
    });
});
