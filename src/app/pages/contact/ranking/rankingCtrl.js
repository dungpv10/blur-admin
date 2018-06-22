(function () {
  'use strict';

  angular.module('BlurAdmin.pages.contact')
      .controller('RankingCtrl', RankingCtrl);

  /** @ngInject */
  function RankingCtrl($scope, teamleadService) {
    $scope.selectedPageSize = {};
    $scope.pageSize = 5;

    $scope.sizes = $scope.sizes = teamleadService.getListPageSize();
    $scope.listDisplayColumns = teamleadService.getListDisplayColumns();
        $scope.listDisplayColumns.unshift({value: '', text: 'Full Name, Phone, Email, Source, Load CV, Người chấm'});

    $scope.selectedPageSize = $scope.sizes[0];
    $scope.dt = new Date();
    $scope.open = open;
    $scope.open1 = open1;
    $scope.opened = false;
    $scope.opened1 = false;
    $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
    $scope.format = $scope.formats[0];
    $scope.options = {
        showWeeks: false
    };
    function open1() {
        $scope.opened1 = !$scope.opened1;
    }
    function open() {
        $scope.opened = !$scope.opened;
    }
    $scope.listRanking = [];
    for (var i = 0; i < 28; ++i) {
      $scope.listRanking.push({
        id: i,
        searchDate: '06/07/2018',
        fullName: 'Tran Tuan Anh',
        email: 'trantuananh@gmail.com',
        telephone: '094123456',
        linkCV: 'http://drive.google.com/trantuananh.cv',
        source: 'http://drive.google.com/trantuananh.cv',
        note: 'No note',
        rank: i + '/' + 28,
        result: (i % 2 == 0 ? 'True' : 'Fail')
      });
    }
    $scope.selectedPageSize.selected = $scope.sizes[0];
  }

})();

