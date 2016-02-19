angular.module( 'moviematch', [
  'moviematch.auth',
  'moviematch.match',
  'moviematch.prefs',
  'moviematch.sessions',
  'moviematch.services',
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
    .otherwise({
      redirectTo: '/signin'
    });
});
