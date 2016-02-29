angular.module( 'moviematch.prefs', [] )

.controller( 'PrefsController', function( $scope ) {
  if (!Auth.isAuth()) {
    $location.path('/signin');
  } 
} );
