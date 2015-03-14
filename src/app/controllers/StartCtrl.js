/* global _ */

angular.module('hack4sweden').controller("StartCtrl", function($scope, $rootScope, $log, JobResource) {
  $rootScope.showLoading(true);
  JobResource.getList('social+media', "1").then(function(response) {
    $rootScope.showLoading(false);
    $log.log(response.data);
  });
  window.scope = $scope;
});
