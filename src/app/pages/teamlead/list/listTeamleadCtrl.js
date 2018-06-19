(function () {
    'use strict';

    angular.module('BlurAdmin.pages.teamlead')
        .controller('ListTeamleadCtrl', ListTeamleadCtrl);

    /** @ngInject */
    function ListTeamleadCtrl($scope) {
        $scope.selectedPageSize = {};
        $scope.pageSize = 5;

        $scope.listTeamlead = [
            {
                orderCode: 'DH test luồng assign converter',
                orderName: 'Chuyên viên tuyển dụng',
                teamlead: 'huongtt25',
                kpi: 1,
                deadline: '18/01/2018',
                proposer: 'phuongnt15',
                linkJD: 'http://google.com'
            },
            {
                orderCode: 'DH test luồng assign converter',
                orderName: 'Chuyên viên tuyển dụng',
                teamlead: 'huongtt25',
                kpi: 1,
                deadline: '18/01/2018',
                proposer: 'phuongnt15',
                linkJD: 'http://google.com'
            },
            {
                orderCode: 'DH test luồng assign converter',
                orderName: 'Chuyên viên tuyển dụng',
                teamlead: 'huongtt25',
                kpi: 1,
                deadline: '18/01/2018',
                proposer: 'phuongnt15',
                linkJD: 'http://google.com'
            },
            {
                orderCode: 'DH test luồng assign converter',
                orderName: 'Chuyên viên tuyển dụng',
                teamlead: 'huongtt25',
                kpi: 1,
                deadline: '18/01/2018',
                proposer: 'phuongnt15',
                linkJD: 'http://google.com'
            },
            {
                orderCode: 'DH test luồng assign converter',
                orderName: 'Chuyên viên tuyển dụng',
                teamlead: 'huongtt25',
                kpi: 1,
                deadline: '18/01/2018',
                proposer: 'phuongnt15',
                linkJD: 'http://google.com'
            },
            {
                orderCode: 'DH test luồng assign converter',
                orderName: 'Chuyên viên tuyển dụng',
                teamlead: 'huongtt25',
                kpi: 1,
                deadline: '18/01/2018',
                proposer: 'phuongnt15',
                linkJD: 'http://google.com'
            }, {
                orderCode: 'DH test luồng assign converter',
                orderName: 'Chuyên viên tuyển dụng',
                teamlead: 'huongtt25',
                kpi: 1,
                deadline: '18/01/2018',
                proposer: 'phuongnt15',
                linkJD: 'http://google.com'
            }
            , {
                orderCode: 'DH test luồng assign converter',
                orderName: 'Chuyên viên tuyển dụng',
                teamlead: 'huongtt25',
                kpi: 1,
                deadline: '18/01/2018',
                proposer: 'phuongnt15',
                linkJD: 'http://google.com'
            }
            , {
                orderCode: 'DH test luồng assign converter',
                orderName: 'Chuyên viên tuyển dụng',
                teamlead: 'huongtt25',
                kpi: 1,
                deadline: '18/01/2018',
                proposer: 'phuongnt15',
                linkJD: 'http://google.com'
            }
            , {
                orderCode: 'DH test luồng assign converter',
                orderName: 'Chuyên viên tuyển dụng',
                teamlead: 'huongtt25',
                kpi: 1,
                deadline: '18/01/2018',
                proposer: 'phuongnt15',
                linkJD: 'http://google.com'
            }
            , {
                orderCode: 'DH test luồng assign converter',
                orderName: 'Chuyên viên tuyển dụng',
                teamlead: 'huongtt25',
                kpi: 1,
                deadline: '18/01/2018',
                proposer: 'phuongnt15',
                linkJD: 'http://google.com'
            }
            , {
                orderCode: 'DH test luồng assign converter',
                orderName: 'Chuyên viên tuyển dụng',
                teamlead: 'huongtt25',
                kpi: 1,
                deadline: '18/01/2018',
                proposer: 'phuongnt15',
                linkJD: 'http://google.com'
            }
            , {
                orderCode: 'DH test luồng assign converter',
                orderName: 'Chuyên viên tuyển dụng',
                teamlead: 'huongtt25',
                kpi: 1,
                deadline: '18/01/2018',
                proposer: 'phuongnt15',
                linkJD: 'http://google.com'
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

