/* global _, moment */

angular.module('hack4sweden')

.directive('modal', function() {
  return {
    restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    templateUrl: 'templates/directives/modal.html',
    controller: 'modalCtrl',
    replace: true,
    transclude: true,
    scope: {},
    link: function(scope, elem, attrs) {
      scope.element = elem;
    }
  };
})

.controller('modalCtrl', function($scope) {

});
