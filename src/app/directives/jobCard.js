angular.module('hack4sweden')

.directive('jobCard', function() {
  return {
    restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: 'templates/directives/jobCard.html',
    controller: 'jobCardCtrl',
    replace: true,
    scope: {
      initialData: '='
    },
    link: function(scope, elem, attrs) {
      scope.element = elem;
    }
  };
})

.controller('jobCardCtrl', function($scope, JobResource, $log) {
  $scope.state = {
    showLoading: false
  };

  $scope.state.showLoading = true;
  JobResource.get($scope.initialData.annonsid).then(function(response) {
    $scope.state.showLoading = false;
    $scope.data = response.data.platsannons;
    $log.log(response.data);
  });
});
