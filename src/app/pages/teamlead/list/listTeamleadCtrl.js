(function () {
    'use strict';

    angular.module('BlurAdmin.pages.teamlead')
        .controller('ListTeamleadCtrl', ListTeamleadCtrl);

    /** @ngInject */
    function ListTeamleadCtrl($scope, teamleadService) {
        $scope.selectedPageSize = {};
        $scope.selectedDisplayColumn = {};
        $scope.pageSize = 5;

        $scope.listTeamlead = [];

        for (var i = 0; i < 28; ++i) {
            $scope.listTeamlead.push(
                {
                    id: i,
                    orderCode: 'DH test luồng assign converter',
                    orderName: 'Chuyên viên tuyển dụng',
                    teamlead: 'huongtt25',
                    kpi: 1,
                    deadline: '18/01/2018',
                    proposer: 'phuongnt15',
                    linkJD: 'http://google.com'
                });
        }

        $scope.sizes = teamleadService.getListPageSize();
        $scope.listDisplayColumns = teamleadService.getListDisplayColumns();
        $scope.listFullname = teamleadService.getListFullname();
        $scope.listOrderCode = [
            {
                id: 1,
                name: 'Code001'
            },
            {
                id: 1,
                name: 'Code002'
            }
        ];

        $scope.listOrderName = [
            {
                id: 1,
                name: 'Chuyên viên đào tạo'
            },
            {
                id: 2,
                name: 'Chuyên viên tuyển dụng'
            }
        ];

        $scope.listKPI = [
            {
                id: 1,
                name: 'KPI 001'
            },
            {
                id: 1,
                name: 'KPI 002'
            }
        ];
        $scope.listDeadline = [
            {
                id: '08/01/2018',
                name: '08/01/2018'
            },
            {
                id: '08/02/2018',
                name: '08/02/2018'
            }
        ];

        $scope.selectedPageSize.selected = $scope.sizes[0];
    }

})();

