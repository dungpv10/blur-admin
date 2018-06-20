(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.convert')
        .controller('InterviewCtrl', InterviewCtrl);
  
    /** @ngInject */
    function InterviewCtrl($scope, teamleadService) {
        $scope.selectedPageSize = {};
        $scope.pageSize = 5;
        $scope.assignLabel = 'Người chấm';

        $scope.dt = new Date();
        $scope.open = open;
        $scope.opened = false;
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.options = {
            showWeeks: false
        };

        function open() {
            $scope.opened = !$scope.opened;
        }

        $scope.listInterview = [];

        for (var i = 0; i < 28; ++i) {
          $scope.listInterview.push({
            id: i,
            searchDate: '06/07/2018',
            fullName: 'Tran Tuan Anh',
            email: 'trantuananh@gmail.com',
            telephone: '094123456',
            linkCV: 'http://drive.google.com/trantuananh.cv',
            source: 'http://drive.google.com/trantuananh.cv',
            interviewDate: '10/08/2019',
            note: 'No note',
            informer: 'huynq09',
            interviewer: 'phuongnt14',
            result: 1
          });
        }
    
        $scope.sizes = $scope.sizes = teamleadService.getListPageSize();
        $scope.listDisplayColumns = teamleadService.getListDisplayColumns();
            $scope.listDisplayColumns.unshift({value: '', text: 'Source, Phone, Email, Link CV'});
    
        $scope.selectedPageSize = $scope.sizes[0];
    
        $scope.changePagesize = function () {
          console.log($scope.selectedPageSize)
          $scope.pageSize = $scope.selectedPageSize.value;
        }
      }
  
  })();
  
  