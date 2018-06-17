(function () {
    'use strict';
  
    angular.module('BlurAdmin.theme.components')
        .directive('langCenter', langCenter);
  
    /** @ngInject */
    function langCenter() {
      return {
        restrict: 'E',
        templateUrl: 'app/theme/components/langCenter/langCenter.html',
        controller: 'LangCenterCtrl'
      };
    }
  
  })();