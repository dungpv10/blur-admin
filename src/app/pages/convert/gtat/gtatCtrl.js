(function () {
  'use strict';

  angular.module('BlurAdmin.pages.convert')
    .controller('GTATCtrl', GTATCtrl);

  /** @ngInject */
  function GTATCtrl($scope, teamleadService) {
    $scope.selectedPageSize = {};
    $scope.pageSize = 5;
    $scope.assignLabel = 'Người chấm';

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

    function open() {
      $scope.opened = !$scope.opened;
    }

    function open1() {
      $scope.opened1 = !$scope.opened1;
    }

    $scope.listGTAT = [];

    for (var i = 0; i < 28; ++i) {
      $scope.listGTAT.push({
        id: i,
        searchDate: '06/07/2018',
        fullName: 'Nguyễn Văn A',
        email: 'nguyenvana@gmail.com',
        telephone: '094123456',
        linkCV: 'http://drive.google.com/nguyenvana.cv',
        source: 'http://drive.google.com/nguyenvana.cv',
        interviewDate: '10/08/2019',
        note: 'No note',
        informer: 'huynq09',
        interviewer: 'phuongnt14',
        result: 1
      });
    }

    $scope.sizes = teamleadService.getListPageSize();
    $scope.listDisplayColumns = teamleadService.getListDisplayColumns();
    $scope.listFullname = teamleadService.getListFullname();
    $scope.listResults = teamleadService.getListResult();
    $scope.listSearchName = [
      {
        id: 1,
        name: 'huynd14'
      },
      {
        id: 2,
        name: 'quangnt15'
      },
      {
        id: 3,
        name: 'tuananh'
      }
    ];

    $scope.selectedPageSize.selected = $scope.sizes[0];
  }

})();

