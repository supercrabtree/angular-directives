'use strict';

angular.module('ajfApp')
  .directive('triggerOnLast', function () {
    return function (scope, element, attrs) {
      if (scope.$last) {
        element.ready(function () {
          element.parent().scope().onReady();
        });
      }
    };
  });
