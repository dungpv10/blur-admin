(function () {
    'use strict';

    angular.module('BlurAdmin.pages.contact')
        .controller('ListContactCtrl', ListContactCtrl);

    /** @ngInject */
    function ListContactCtrl($scope, teamleadService) {
        $scope.selectedPageSize = {};
        $scope.selectedDisplayColumn = {};
        $scope.pageSize = 5;

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


        $scope.listTeamlead = [];
        for(let i = 0; i < 25; i++){
            $scope.listTeamlead.push({
                findCVDay: '15/12/2018',
                userName: 'huongtt25',
                email: 'huongtt25@gmail.com',
                numberPhone: '0989456231',
                CVLink: 'https://google.com',
                source: 'source',
                order: Math.round(Math.random()),
                ttpvChamCVNgayGoi : '15/12/2018',
                ttpvChamCVKetQua : 'trúng tuyển',
                ttpvMoiUngTuyenKetQua : 'trúng tuyển',
                ttpvMoiUngTuyenTrangThai : 'trúng tuyển',
                ttpvOrientationKetQua : 'Trúng tuyển',
                ttpvOrientationNgayPhongVan : 'Trúng tuyển',
                ttpvPVCMNgayPhongVan : '15/12/2018',
                ttpvPVVHKetQua : 'Trúng tuyển',
                ttpvPVVHNgayPhongVan : '15/12/2018',
                ttpvGTATNgayPhongVan : '15/12/2018',
                ttpvGTATKetQua : 'Trúng tuyển',
                ttpvOfferKetQua : 'Trúng tuyển',
                ttpvRankingKetQua : 'Trúng tuyển'
            });
        }

        $scope.sizes = teamleadService.getListPageSize();
        $scope.listDisplayColumns = teamleadService.getListDisplayColumns();
        $scope.listDisplayColumns.unshift({value: '', text: 'Order code, Order name, Teamlead, KPI, Deadline, Người chấm'});

        $scope.selectedPageSize = $scope.sizes[0];

        $scope.changePagesize = function () {
            console.log($scope.selectedPageSize)
            $scope.pageSize = $scope.selectedPageSize.value;
        }
    }

})();

