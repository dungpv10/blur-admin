(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.teamlead')
        .controller('CreateProcedureCtrl', CreateProcedureCtrl);
  
    /** @ngInject */
    function CreateProcedureCtrl($scope) {
     $scope.activeTab = 1;

     $scope.stepSelected = {};

     $scope.stepOptions = [
         {
             value: 0,
             text: 'Select Step'
         },
         {
            value: 1,
            text: 'Step 1'
        }
     ];
    }
  
  })();
  
  