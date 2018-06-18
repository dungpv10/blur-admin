(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.convert')
        .controller('InterviewCtrl', InterviewCtrl);
  
    /** @ngInject */
    function InterviewCtrl($scope) {
     var vm = this;
  
      vm.personalInfo = {};
      vm.productInfo = {};
      vm.shipment = {};

    }
  
  })();
  
  