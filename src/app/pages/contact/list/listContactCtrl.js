(function () {
    'use strict';

    angular.module('BlurAdmin.pages.contact')
        .controller('ListContactCtrl', ListContactCtrl);

    /** @ngInject */
    function ListContactCtrl($scope, teamleadService) {
        $scope.selectedPageSize = {};
        $scope.selectedDisplayColumn = {};
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

