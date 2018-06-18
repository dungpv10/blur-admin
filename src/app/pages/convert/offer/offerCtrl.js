(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.convert')
        .controller('OfferCtrl', OfferCtrl);
  
    /** @ngInject */
    function OfferCtrl($scope) {
     var vm = this;
  
      vm.personalInfo = {};
      vm.productInfo = {};
      vm.shipment = {};

    }
  
  })();
  
  