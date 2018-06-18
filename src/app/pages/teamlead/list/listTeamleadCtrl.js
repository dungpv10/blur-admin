(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.teamlead')
        .controller('ListTeamleadCtrl', ListTeamleadCtrl);
  
    /** @ngInject */
    function ListTeamleadCtrl($scope) {
     var vm = this;
  
      vm.personalInfo = {};
      vm.productInfo = {};
      vm.shipment = {};

    }
  
  })();
  
  