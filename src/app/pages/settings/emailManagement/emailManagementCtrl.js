(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.setting')
        .controller('EmailManagementCtrl', EmailManagementCtrl);
  
    /** @ngInject */
    function EmailManagementCtrl($scope) {
     var vm = this;
  
      vm.personalInfo = {};
      vm.productInfo = {};
      vm.shipment = {};

    }
  
  })();
  
  