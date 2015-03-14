/* global _ */

angular.module('hack4sweden').controller("StartCtrl", function($scope, $rootScope, $log, JobResource) {
  $scope.state = {
    searchTerm: "",
    data: []
  };
  
  $scope.search = function() {
    $rootScope.showLoading(true);
    JobResource.getList($scope.state.searchTerm, "1").then(function(response) {
      $rootScope.showLoading(false);
      $scope.state.data = response.data.matchningslista.matchningdata;
    });
  };
  
  window.scope = $scope;
});
