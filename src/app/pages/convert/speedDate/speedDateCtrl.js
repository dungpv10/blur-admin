(function () {
    'use strict';

    angular.module('BlurAdmin.pages.convert')
        .controller('SpeedDateCtrl', SpeedDateCtrl);

    /** @ngInject */
    function SpeedDateCtrl($scope) {
        var vm = this;

        $scope.selectedPageSize = {};
        $scope.selectedDisplayColumn = {};
        $scope.pageSize = 5;
        $scope.opened = false;
        $scope.orderNumber = [

        ];
        function open() {
            $scope.opened = !$scope.opened;
        }
        $scope.open = open;
        $scope.listSpeedDate = [];
        for (var i = 0; i < 23; i++) {
            $scope.listSpeedDate.push({
                findCVDay: '15/12/2018',
                userName: 'huongtt25',
                email: 'huongtt25@gmail.com',
                numberPhone: '0989456231',
                CVLink: 'https://google.com',
                call: 'https://google.com',
                source: 'source'
            });
        }
    }

})();
  
  