/* global _ */

angular.module('hack4sweden').controller("MainCtrl", function($scope, $rootScope) {
  $rootScope.showLoading = function(show) {
    $rootScope.showLoadingFlag = show;
    $scope.showLoadingFlag = show;
  };
});
