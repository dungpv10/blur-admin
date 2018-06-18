(function () {
  'use strict';

  angular.module('BlurAdmin.pages.convert')
      .controller('GTATCtrl', GTATCtrl);

  /** @ngInject */
  function GTATCtrl($scope) {
   var vm = this;

    vm.personalInfo = {};
    vm.productInfo = {};
    vm.shipment = {};

    vm.arePersonalInfoPasswordsEqual = function () {
      return vm.personalInfo.confirmPassword && vm.personalInfo.password == vm.personalInfo.confirmPassword;
    };
  }

})();

