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

    $scope.sizes = teamleadService.getListPageSize();
    $scope.listDisplayColumns = teamleadService.getListDisplayColumns();
    $scope.listFullname = teamleadService.getListFullname();
    $scope.statuses = teamleadService.getListStatus();
    $scope.listResults = teamleadService.getListResult();

    $scope.selectedPageSize.selected = $scope.sizes[0];
  }

})();

