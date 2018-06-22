(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teamlead')
    .controller('AssignConvertCtrl', AssignConvertCtrl);

  /** @ngInject */
  function AssignConvertCtrl($scope, teamleadService) {
    $scope.selectedPageSize = {};
    $scope.pageSize = 5;
    $scope.assignLabel = 'Converter';

    $scope.listConverter = [];

    for (var i = 0; i < 28; ++i) {
      $scope.listConverter.push(
        {
          id: i,
          fullName: 'Tran Tuan Anh',
          email: 'trantuananh@gmail.com',
          linkCV: 'http://drive.google.com/trantuananh.cv',
          status: 0,
          result: 1,
          proposer: 'phuongnt15',
          converterLink : 'https://google.com'
        });
    }

    $scope.sizes = teamleadService.getListPageSize();
    $scope.listDisplayColumns = teamleadService.getListDisplayColumns();
    $scope.listFullname = teamleadService.getListFullname();
    $scope.statuses = teamleadService.getListStatus();
    $scope.listResults = teamleadService.getListResult();

    $scope.selectedPageSize.selected = $scope.sizes[0];

    $scope.checkAll = false;
    $scope.fncCheckAll = function(){
        return $scope.checkAll = !$scope.checkAll;
    }

  }

})();

