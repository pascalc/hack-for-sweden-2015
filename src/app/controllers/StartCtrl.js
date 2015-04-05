/* global _, window */

angular.module('hack4sweden').controller("StartCtrl", function($scope, $rootScope, $log, JobResource, settings) {
  $scope.state = {
    searchTerm: "",
    countyCode: 1,
    data: [],
    currentPage: 0,
    fetchingJobs: false,
    allJobsFetched: false
  };

  $scope.counties = settings.countyCodes;
  
  $scope.search = function() {
    $scope.state.data = [];
    $scope.state.currentPage = 0;
    $scope.state.allJobsFetched = false;
    window.scrollTo(0,0);

    $scope.state.searched = true;
    $rootScope.showLoading(true);
    $scope.getNextJobs();
  };

  $scope.getNextJobs = function() {
    if ($scope.state.fetchingJobs) {
      $log.debug('Will not fetch more jobs, still fetching jobs');
      return;
    }
    if ($scope.state.allJobsFetched) {
      $log.debug('Will not loading more, loaded all jobs');
      return;
    }
    $scope.state.fetchingJobs = true;
    $scope.state.currentPage++;
    $log.debug('Fetching jobs page ' + $scope.state.currentPage);
    JobResource.getList($scope.state.searchTerm, $scope.state.countyCode, $scope.state.currentPage).then(function(response) {
      $scope.state.data = $scope.state.data.concat(response.data.matchningslista.matchningdata);
      if (response.data.matchningslista.antal_sidor === $scope.state.currentPage) {
        $scope.state.allJobsFetched = true;
      }
      $rootScope.showLoading(false);
      $scope.state.fetchingJobs = false;
    });
  };

  window.scope = $scope;
});
