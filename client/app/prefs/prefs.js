angular.module( 'moviematch.prefs', [] )

.controller( 'PrefsController', function( $scope, Auth, $location ) {
  if (!Auth.isAuth()) {
    $location.path('/signin');
  } 
} );
