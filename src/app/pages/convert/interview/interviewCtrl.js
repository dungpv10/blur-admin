(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.convert')
        .controller('InterviewCtrl', InterviewCtrl);
  
    /** @ngInject */
    function InterviewCtrl($scope, teamleadService) {
        $scope.selectedPageSize = {};
        $scope.pageSize = 5;
        $scope.assignLabel = 'Người chấm';
    
        $scope.listInterview = [
            {
              id: 1,
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
            },
            {
              id: 2,
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
            },
            {
              id: 3,
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
            },
            {
              id: 4,
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
            },
            {
              id: 5,
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
            },
            {
              id: 6,
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
            }, 
            {
              id: 7,
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
            }
            , {
              id: 8,
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
            }
            , 
            {
              id: 9,
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
            }
            , 
            {
              id: 10,
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
            }
            , {
              id: 11,
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
            }
            , {
              id: 12,
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
            }
            , {
              id: 13,
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
            }
          ];
    
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
  
  