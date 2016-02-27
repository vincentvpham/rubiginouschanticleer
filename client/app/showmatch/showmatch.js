angular.module( 'moviematch.showmatch', [] )

  .controller( 'ShowmatchController', function( $scope, Session, Auth ) {

    Session.getSession()
    .then( function( session ) {
      $scope.session = session;
    });
    $scope.user = {};
    $scope.user.name = Auth.getUserName();
    $scope.imgPath = 'http://image.tmdb.org/t/p/w500';

    $scope.currMovie = {};
  });
