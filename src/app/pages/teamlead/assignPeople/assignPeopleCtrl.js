(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teamlead')
      .controller('AssignPeopleCtrl', AssignPeopleCtrl);

  /** @ngInject */
  function AssignPeopleCtrl($scope) {
   var vm = this;

    vm.personalInfo = {};
    vm.productInfo = {};
    vm.shipment = {};

    vm.arePersonalInfoPasswordsEqual = function () {
      return vm.personalInfo.confirmPassword && vm.personalInfo.password == vm.personalInfo.confirmPassword;
    };
  }

})();

