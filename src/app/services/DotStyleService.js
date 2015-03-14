/*global _, $*/

angular.module('hack4sweden').factory("DotStyleService", function() {
  return {
    "arbetstid": function(value) {
      if ($.trim(value).toLowerCase() === "heltid") {
        return { "background-color": "green" };
      } else {
        return { "background-color": "red" };
      }
    },
    "varaktighet": function(value) {
      if ($.trim(value).toLowerCase() === "tillsvidare") {
        return { "background-color": "green" };
      } else {
        return { "background-color": "red" };
      }
    },
    "lonetyp": function(value) {
      var cleaned = $.trim(value).toLowerCase();
      if (cleaned === "fast månads- vecko- eller timlön") {
        return { "background-color": "green" };
      } else if (cleaned === "fast och rörlig lön") {
        return { "background-color": "orange" };
      } else {
        return { "background-color": "red" };
      }
    }
  };
});
