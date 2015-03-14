/* global _ */

angular.module('hack4sweden').controller("StartCtrl", function($scope, $rootScope, $log, JobResource) {
  $rootScope.showLoading(true);
  $scope.state = {};
  JobResource.getList('social+media', "1").then(function(response) {
    $rootScope.showLoading(false);
    $scope.state.data = response.data.matchningslista.matchningdata;
  });
  window.scope = $scope;
});
