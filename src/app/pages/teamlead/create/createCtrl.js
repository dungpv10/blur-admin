(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.teamlead')
        .controller('CreateCtrl', CreateCtrl);
  
    /** @ngInject */
    function CreateCtrl($scope) {
     var vm = this;
  
      vm.personalInfo = {};
      vm.productInfo = {};
      vm.shipment = {};

    }
  
  })();
  
  