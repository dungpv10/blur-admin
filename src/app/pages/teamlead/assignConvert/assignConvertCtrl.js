(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teamlead')
      .controller('AssignConvertCtrl', AssignConvertCtrl);

  /** @ngInject */
  function AssignConvertCtrl($scope, teamleadService) {
    $scope.selectedPageSize = {};
    $scope.pageSize = 5;

    $scope.sizes = $scope.sizes = teamleadService.getListPageSize();
    $scope.listDisplayColumns = teamleadService.getListDisplayColumns();
        $scope.listDisplayColumns.unshift({value: '', text: 'Full Name, Phone, Email, Source, Load CV, Người chấm'});

    $scope.selectedPageSize = $scope.sizes[0];

    $scope.changePagesize = function () {
      console.log($scope.selectedPageSize)
      $scope.pageSize = $scope.selectedPageSize.value;
    };
  }

})();

