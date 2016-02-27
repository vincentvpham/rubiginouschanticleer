angular.module( 'moviematch.directive', [] )

.directive ('dstMainNav',  function( ) {
    return {
      restrict: 'E',
      controller: function($scope, Session, Auth) {
        $scope.expand = false;
        $scope.lastEventType;
        $scope.sessionName = Session.getSession();
        $scope.username = Auth.getUserName();
        $scope.toggleNavList = function(ev){
          console.log("toggle called");
          if (!(ev.type === 'mouseleave' && $scope.lastEventType === 'click')) {
            $scope.expand = !$scope.expand;
          }
          $scope.lastEventType = ev.type;
        };
      },
      templateUrl: 'app/directives/dst_main_nav.html'
  }
});
