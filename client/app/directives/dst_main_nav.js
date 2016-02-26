angular.module( 'moviematch.directive', [] )

.directive ('dstMainNav',  function( ) {
    return {
      // dstMainNav : function( ) {
      restrict: 'E',
      controller: function($scope) {
        $scope.expand = false;
        $scope.lastEventType;
        $scope.toggleNavList = function(ev){
          console.log("toggle called");
          if (!(ev.type === 'mouseleave' && $scope.lastEventType === 'click')) {
            $scope.expand = !$scope.expand;
          }
          $scope.lastEventType = ev.type;
        };
      },
      templateUrl: 'app/directives/dst_main_nav.html',
      controller: 'LobbyController'
    //};
  }
});
