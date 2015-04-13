/* global _, moment */

angular.module('hack4sweden')

.directive('jobCard', function() {
  return {
    restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: 'templates/directives/jobCard.html',
    controller: 'jobCardCtrl',
    replace: true,
    scope: {
      initialData: '=',
      jobData: '='
    },
    link: function(scope, elem, attrs) {
      scope.element = elem;
    }
  };
})

.controller('jobCardCtrl', function($scope, JobResource, $log, DotStyleService) {
  $scope.state = {
    showLoading: false
  };

  $scope.state.showLoading = true;
  JobResource.get($scope.initialData.annonsid).then(function(response) {
    $scope.state.showLoading = false;
    $scope.jobData = angular.copy(response.data);
    $scope.data = response.data.platsannons;
    $log.log(response.data);
  });

  $scope.styleDot = function(key, value) {
    if (_.has(DotStyleService, key)) {
      return DotStyleService[key](value);
    } else {
      return {};
    }
  };

  $scope.urgentApplyDate = function(date) {
    return moment(date, 'YYYY-MM-DDTHH:mm:ss+Z').diff(moment(), 'days') <= 7;
  };
});
