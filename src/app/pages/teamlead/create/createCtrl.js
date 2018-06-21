(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.teamlead')
        .controller('CreateCtrl', CreateCtrl);
  
    /** @ngInject */
    function CreateCtrl($scope) {
     $scope.activeTab = 0;
    }
  
  })();
  
  