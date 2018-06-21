(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teamlead')
    .controller('AssignPeopleCtrl', AssignPeopleCtrl);

  /** @ngInject */
  function AssignPeopleCtrl($scope, teamleadService) {
    $scope.selectedPageSize = {};
    $scope.pageSize = 5;
    $scope.assignLabel = 'Người chấm';
    $scope.listAssignPeople = [];

    for (var i = 0; i < 28; ++i) {
      $scope.listAssignPeople.push(
        {
          id: i,
          fullName: 'Tran Tuan Anh',
          email: 'trantuananh@gmail.com',
          linkCV: 'http://drive.google.com/trantuananh.cv',
          status: 0,
          result: 1,
          proposer: 'phuongnt15',
          proposer_link: 'http://drive.google.com/trantuananh.cv'
        });
    }

    $scope.sizes = $scope.sizes = teamleadService.getListPageSize();
    $scope.listDisplayColumns = teamleadService.getListDisplayColumns();
    $scope.listDisplayColumns.unshift({ value: '', text: 'Full Name, Phone, Email, Source, Load CV, Người chấm' });

    $scope.selectedPageSize = $scope.sizes[0];

    $scope.changePagesize = function () {
      console.log($scope.selectedPageSize)
      $scope.pageSize = $scope.selectedPageSize.value;
    }
  }

})();

