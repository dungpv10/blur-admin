(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.setting')
        .controller('UserManagementCtrl', UserManagementCtrl);
  
    /** @ngInject */
    function UserManagementCtrl($scope) {
     var vm = this;
  
      vm.personalInfo = {};
      vm.productInfo = {};
      vm.shipment = {};

    }
  
  })();
  
  