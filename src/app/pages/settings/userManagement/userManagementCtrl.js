(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.setting')
        .controller('UserManagementCtrl', UserManagementCtrl);
  
    /** @ngInject */
    function UserManagementCtrl($scope, $uibModal, teamleadService) {
        $scope.selectedPageSize = {};
        $scope.pageSize = 5;
        $scope.assignLabel = 'Người chấm';

        $scope.listUser = [];

        for (var i = 1; i < 28; ++i) {
            $scope.listUser.push({
                id: i,
                userName: 'phuongnt15',
                fullName: 'Nguyễn Tiến Phương',
                email: 'phuongnt15@topica.edu.vn',
                role: 'Admin',
                status: 1
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
        
        $scope.listRole = [
            {
                id: 1,
                name: 'Admin'
            },
            {
                id: 2,
                name: 'User'
            }
        ];

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

        $scope.tinymceModel = 'Initial content';

        $scope.getContent = function () {
            console.log('Editor content:', $scope.tinymceModel);
        };

        $scope.setContent = function () {
            $scope.tinymceModel = 'Time: ' + (new Date());
        };

        $scope.tinymceOptions = {
            plugins: 'link image code',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
        };

        $scope.deleteTemplate = function(index) {
            $scope.listEmailTemplate.splice(index, 1);
        };
    }
  
  })();
  
  