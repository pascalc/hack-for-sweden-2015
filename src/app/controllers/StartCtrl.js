/* global _ */

angular.module('hack4sweden').controller("StartCtrl", function($scope, $rootScope, $log, $http, $timeout) {
  $rootScope.showLoading(true);
  $http.post("http://localhost:9000/proxy?target=http://api.scb.se/OV0104/v1/doris/sv/ssd/START/AA/AA0003/AA0003B/IntGr1RikKON",
    {
      "query": [
        {
          "code": "Kon",
          "selection": {
            "filter": "item",
            "values": [
              "1+2"
            ]
          }
        },
        {
          "code": "Bakgrund",
          "selection": {
            "filter": "vs:IntegrationBakgrundFödelseland",
            "values": [
              "TOT",
              "SE",
              "NEXS",
              "EUEESXN",
              "VXEUEES"
            ]
          }
        },
        {
          "code": "ContentsCode",
          "selection": {
            "filter": "item",
            "values": [
              "AA0003AT"
            ]
          }
        },
        {
          "code": "Tid",
          "selection": {
            "filter": "item",
            "values": [
              "2012"
            ]
          }
        }
      ],
      "response": {
        "format": "json"
      }
    }
  ).then(function(response) {
    $rootScope.showLoading(false);

    var data = response.data.data;
    var series = _.map(_.flatten(_.pluck(data, "values")), function(n) {
      return parseFloat(n, 10);
    });

    var labels = _.map(data, function(d) {
      return d.key[2];
    });
    $scope.data = {
      labels: labels,
      datasets: [
        {
          data: series
        }
      ]
    };
  });

  $scope.$watch("data", function(v) {
    $log.log("data:", v);
  }, true);
  window.scope = $scope;
});
