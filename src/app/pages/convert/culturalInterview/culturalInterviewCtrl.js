(function () {
  'use strict';

  angular.module('BlurAdmin.pages.convert')
      .controller('CulturalInterviewCtrl', CulturalInterviewCtrl);

  /** @ngInject */
  function CulturalInterviewCtrl($scope) {
   var vm = this;

    vm.personalInfo = {};
    vm.productInfo = {};
    vm.shipment = {};

    vm.arePersonalInfoPasswordsEqual = function () {
      return vm.personalInfo.confirmPassword && vm.personalInfo.password == vm.personalInfo.confirmPassword;
    };
  }

})();

