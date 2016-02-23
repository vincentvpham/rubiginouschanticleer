angular.module( 'moviematch.auth', [] )

.controller( 'AuthController', function( $scope, Auth, $window, $location ) {
  $scope.user = {};
  $scope.error = {}
  $scope.error.userInput = "Please enter a username.";
  $scope.error.pwdInput = "Please enter a password.";

  $scope.signin = function () {
    Auth.signin( $scope.user )
      .then( function ( token ) {
        $window.localStorage.setItem( 'com.moviematch', token );
        $location.path( '/sessions' );
      } )
      .catch( function ( error ) {
        console.error( error );
      } );
  };

  $scope.signup = function () {
    Auth.signup( $scope.user )
      .then( function ( token ) {
        console.log($location);
        $window.localStorage.setItem( 'com.moviematch', token );
        $location.path( '/sessions' );
      })
      .catch( function ( error ) {
        console.error( error );
      });
  };

  $scope.setUserName = function () {
    Auth.setUserName( $scope.user );
  };

} );
