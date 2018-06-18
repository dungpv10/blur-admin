(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.convert')
        .controller('ScheduleCtrl', ScheduleCtrl);
  
    /** @ngInject */
    function ScheduleCtrl($scope) {
     var vm = this;
  
      vm.personalInfo = {};
      vm.productInfo = {};
      vm.shipment = {};

    }
  
  })();
  
  