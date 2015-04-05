angular.module('hack4sweden')

.directive('whenScrolledBottom', function($timeout, $log) {
  var triggerHeight = 50; // When <= triggerHeight from bottom the given function will get applied

  return function(scope, elm, attr) {
    $log.debug('init stWhenScrolled');
    var raw = elm[0];

    elm.bind('scroll', function() {
      var totalHeight = raw.scrollHeight;
      var visibleBottom = elm.height() + elm.scrollTop();
      var inTriggerZone = totalHeight - visibleBottom <= triggerHeight;

      if (inTriggerZone) {
        scope.$apply(attr.whenScrolledBottom);
      }
    });
  };
});