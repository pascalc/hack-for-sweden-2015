/*global _, moment*/

angular.module('hack4sweden')
  
  .filter('momentDate', function() {
    return function(input, inputFormat, outputFormatStr) {
      if (!input) { return ""; }
      return moment(input, inputFormat).lang("sv").format(outputFormatStr);
    };
  });
