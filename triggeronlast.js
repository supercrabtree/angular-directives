'use strict';

angular.module('myApp')
  .directive('triggerOnLast', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        if (scope.$last) {
          element.ready(function () {
            element.parent().scope().onReady();
          });
        }
      }
    };
  })
  .directive('someOtherDirective', function () {
    return {
      restrict: 'E',
      scope: true,
      link: function postLink(scope, element, attrs) {
        function onReady() {
          // do stuffs with the ng-repeat items
        }
        if (angular.isDefined(attrs.waitForLast)) {
          scope.onReady = onReady;
        } else {
          onReady();
        }
      }
    };
  });
