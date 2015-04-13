/* global _, moment */

angular.module('hack4sweden')

.directive('jobDetails', function() {
  return {
    restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: 'templates/directives/jobDetails.html',
    controller: 'jobDetailsCtrl',
    replace: true,
    scope: {
      jobData: '='
    },
    link: function(scope, elem, attrs) {
      scope.element = elem;
    }
  };
})

.controller('jobDetailsCtrl', function($scope) {

});
