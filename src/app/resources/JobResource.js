/*global _*/

angular.module('hack4sweden').factory("JobResource", function($http, $log) {
  var getList = function(searchTerm, county) {
    var url = "/rest/platsannons/matchning?nyckelord=" + searchTerm + "&lanid=" + county;
    // $log.log("Requesting:", url);
    return $http.get(url);
  };

  var get = function(id) {
    return $http.get("/rest/platsannons/" + id);
  };

  return {
    getList: getList,
    get: get
  };
});
