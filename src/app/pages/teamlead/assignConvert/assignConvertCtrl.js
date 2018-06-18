(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teamlead')
      .controller('AssignConvertCtrl', AssignConvertCtrl);

  /** @ngInject */
  function AssignConvertCtrl($scope) {
   var vm = this;

    vm.personalInfo = {};
    vm.productInfo = {};
    vm.shipment = {};

    vm.arePersonalInfoPasswordsEqual = function () {
      return vm.personalInfo.confirmPassword && vm.personalInfo.password == vm.personalInfo.confirmPassword;
    };
  }

})();

