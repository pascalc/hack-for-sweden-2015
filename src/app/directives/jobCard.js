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

.controller('jobCardCtrl', function($scope) {
  
});
