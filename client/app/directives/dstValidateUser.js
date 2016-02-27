angular.module( 'moviematch.dstValidateUser', [] )

.directive ('dstValidateUser',  function($q, $http) {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function (scope, elm, attrs, ngModel ) {
        ngModel.$asyncValidators.uniqueUsername = function(modelValue, viewValue) {
          console.log("inside async");
          var value = modelValue || viewValue;

          // Lookup user by username
          return $http.get('/api/users/' + value)
            .then(function resolved() {
               //username exists, this means validation fails
               console.log("username already exists");
               return $q.reject('exists');
             }, function rejected() {
               //username does not exist, therefore this validation passes
               return true;
             });
           };
        }
      }
});
