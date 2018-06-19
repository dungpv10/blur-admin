(function () {
  'use strict';

  angular.module('BlurAdmin.pages.teamlead')
    .controller('AssignPeopleCtrl', AssignPeopleCtrl);

  /** @ngInject */
  function AssignPeopleCtrl($scope) {
    $scope.selectedPageSize = {};
    $scope.pageSize = 5;

    $scope.listAssignPeople = [
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

    $scope.sizes = [
      {
        value: 5,
        text: '5'
      },
      {
        value: 10,
        text: '10'
      },
      {
        value: 20,
        text: '20'
      },
      {
        value: 25,
        text: '25'
      }
    ];

    $scope.selectedPageSize = $scope.sizes[0];

    $scope.changePagesize = function () {
      console.log($scope.selectedPageSize)
      $scope.pageSize = $scope.selectedPageSize.value;
    }
  }

})();

