angular.module( 'moviematch.auth', [] )

.controller( 'AuthController', function( $scope, Auth, $window, $location, $timeout ) {
  $scope.user = {};

  if( $location.path() === '/signout' ) {
    console.log( 'You are signed out. Redirecting in 2s.' );
    Auth.signout();
    $timeout( function() {
      $location.path( '/signin' );
    }, 2000 );
  }


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
