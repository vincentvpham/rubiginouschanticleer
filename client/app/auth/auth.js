angular.module( 'moviematch.auth', [] )

.controller( 'AuthController', function( $scope, Auth, $window, $location ) {
  $scope.user = {};

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

} );
