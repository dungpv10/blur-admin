(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.setting')
        .controller('EmailManagementCtrl', EmailManagementCtrl);
  
    /** @ngInject */
    function EmailManagementCtrl($scope,$uibModal, teamleadService) {
        $scope.selectedPageSize = {};
        $scope.pageSize = 5;
        $scope.assignLabel = 'Người chấm';

        $scope.listEmailTemplate = [];

        for (var i = 0; i < 28; ++i) {
          $scope.listEmailTemplate.push({
            stt: i,
            donHang: 'FCA',
            templateName: 'FCA_MoiUngTuyen'
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

        $scope.openPopup = function (page, size) {
            $uibModal.open({
                animation: true,
                templateUrl: page,
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });
        };
      }
  
  })();
  
  