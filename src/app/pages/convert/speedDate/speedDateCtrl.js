(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.convert')
        .controller('SpeedDateCtrl', SpeedDateCtrl);
  
    /** @ngInject */
    function SpeedDateCtrl($scope) {
     var vm = this;
  
      vm.personalInfo = {};
      vm.productInfo = {};
      vm.shipment = {};

    }
  
  })();
  
  