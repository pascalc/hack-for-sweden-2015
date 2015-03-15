/* global _, window */

angular.module('hack4sweden').controller("StartCtrl", function($scope, $rootScope, $log, JobResource, settings) {
  $scope.state = {
    searchTerm: "",
    countyCode: 1,
    data: []
  };

  $scope.counties = settings.countyCodes;
  
  $scope.search = function() {
    $scope.state.data = [];
    window.scrollTo(0,0);

    $scope.state.searched = true;
    $rootScope.showLoading(true);
    JobResource.getList($scope.state.searchTerm, $scope.state.countyCode).then(function(response) {
      $rootScope.showLoading(false);
      $scope.state.data = response.data.matchningslista.matchningdata;
    });
  };
  
  window.scope = $scope;
});
