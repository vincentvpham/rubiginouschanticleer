angular.module( 'moviematch.directive', [] )
.directive ('dstMainNav',  function() {
var dstMainNav = module.exports = function() {
  return {
    restrict: 'E',
    controller: function($scope) {
      $scope.expand = false;
      $scope.lastEventType;
      $scope.toggleNavList = function(ev){
        if (!(ev.type === 'mouseleave' && $scope.lastEventType === 'click')) {
          $scope.expand = !$scope.expand;
        }
        $scope.lastEventType = ev.type;
      };
    },
    templateUrl: 'app/directives/dst_main_nav.html',
    controller: 'LobbyController'
  };
});
