/* global _ */

angular.module('hack4sweden').controller("StartCtrl", function($scope, $rootScope, $log, JobResource) {
  $rootScope.showLoading(true);
  JobResource.getList('social+media', "1").then(function(response) {
    $log.log(response.data);
    var id = response.data.matchningslista.matchningdata[0].annonsid;
    JobResource.get(id).then(function(response) {
      $rootScope.showLoading(false);
      $log.log("Annons", id, response.data);
    });
  });
  window.scope = $scope;
});
