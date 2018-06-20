(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teamlead')
      .controller('AssignConvertCtrl', AssignConvertCtrl);

  /** @ngInject */
  function AssignConvertCtrl($scope, teamleadService) {
    $scope.selectedPageSize = {};
    $scope.pageSize = 5;
    $scope.assignLabel = 'Converter';

    $scope.listConverter = [
      {
        id: 1,
        fullName: 'Tran Tuan Anh',
        email: 'trantuananh@gmail.com',
        linkCV: 'http://drive.google.com/trantuananh.cv',
        status: 0,
        result: 1,
        proposer: 'phuongnt15'
      },
      {
        id: 2,
        fullName: 'Tran Tuan Anh',
        email: 'trantuananh@gmail.com',
        linkCV: 'http://drive.google.com/trantuananh.cv',
        status: 0,
        result: 1,
        proposer: 'phuongnt15'
      },
      {
        id: 3,
        fullName: 'Tran Tuan Anh',
        email: 'trantuananh@gmail.com',
        linkCV: 'http://drive.google.com/trantuananh.cv',
        status: 0,
        result: 1,
        proposer: 'phuongnt15'
      },
      {
        id: 4,
        fullName: 'Tran Tuan Anh',
        email: 'trantuananh@gmail.com',
        linkCV: 'http://drive.google.com/trantuananh.cv',
        status: 0,
        result: 1,
        proposer: 'phuongnt15'
      },
      {
        id: 5,
        fullName: 'Tran Tuan Anh',
        email: 'trantuananh@gmail.com',
        linkCV: 'http://drive.google.com/trantuananh.cv',
        status: 0,
        result: 1,
        proposer: 'phuongnt15'
      },
      {
        id: 6,
        fullName: 'Tran Tuan Anh',
        email: 'trantuananh@gmail.com',
        linkCV: 'http://drive.google.com/trantuananh.cv',
        status: 0,
        result: 1,
        proposer: 'phuongnt15'
      }, 
      {
        id: 7,
        fullName: 'Tran Tuan Anh',
        email: 'trantuananh@gmail.com',
        linkCV: 'http://drive.google.com/trantuananh.cv',
        status: 0,
        result: 1,
        proposer: 'phuongnt15'
      }
      , {
        id: 8,
        fullName: 'Tran Tuan Anh',
        email: 'trantuananh@gmail.com',
        linkCV: 'http://drive.google.com/trantuananh.cv',
        status: 0,
        result: 1,
        proposer: 'phuongnt15'
      }
      , 
      {
        id: 9,
        fullName: 'Tran Tuan Anh',
        email: 'trantuananh@gmail.com',
        linkCV: 'http://drive.google.com/trantuananh.cv',
        status: 0,
        result: 1,
        proposer: 'phuongnt15'
      }
      , 
      {
        id: 10,
        fullName: 'Tran Tuan Anh',
        email: 'trantuananh@gmail.com',
        linkCV: 'http://drive.google.com/trantuananh.cv',
        status: 0,
        result: 1,
        proposer: 'phuongnt15'
      }
      , {
        id: 11,
        fullName: 'Tran Tuan Anh',
        email: 'trantuananh@gmail.com',
        linkCV: 'http://drive.google.com/trantuananh.cv',
        status: 0,
        result: 1,
        proposer: 'phuongnt15'
      }
      , {
        id: 12,
        fullName: 'Tran Tuan Anh',
        email: 'trantuananh@gmail.com',
        linkCV: 'http://drive.google.com/trantuananh.cv',
        status: 0,
        result: 1,
        proposer: 'phuongnt15'
      }
      , {
        id: 13,
        fullName: 'Tran Tuan Anh',
        email: 'trantuananh@gmail.com',
        linkCV: 'http://drive.google.com/trantuananh.cv',
        status: 0,
        result: 1,
        proposer: 'phuongnt15'
      }
    ];

    $scope.sizes = $scope.sizes = teamleadService.getListPageSize();
    $scope.listDisplayColumns = teamleadService.getListDisplayColumns();
        $scope.listDisplayColumns.unshift({value: '', text: 'Full Name, Phone, Email, Source, Load CV, Người chấm'});

    $scope.selectedPageSize = $scope.sizes[0];

    $scope.changePagesize = function () {
      console.log($scope.selectedPageSize)
      $scope.pageSize = $scope.selectedPageSize.value;
    }
  }

})();

