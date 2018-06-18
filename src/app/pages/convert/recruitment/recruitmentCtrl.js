(function () {
  'use strict';

  angular.module('BlurAdmin.pages.convert')
      .controller('RecruitmentCtrl', RecruitmentCtrl);

  /** @ngInject */
  function RecruitmentCtrl($scope) {
   var vm = this;

    vm.personalInfo = {};
    vm.productInfo = {};
    vm.shipment = {};

    vm.arePersonalInfoPasswordsEqual = function () {
      return vm.personalInfo.confirmPassword && vm.personalInfo.password == vm.personalInfo.confirmPassword;
    };
  }

})();

