(function () {
    'use strict';

    angular.module('BlurAdmin.pages.teamlead')
        .controller('CreateCtrl', CreateCtrl);

    /** @ngInject */
    function CreateCtrl($scope, $uibModal) {
        $scope.itemOrder = {
            endDate: new Date(),
            orderDate: new Date()
        };
        $scope.activeTab = 0;

        $scope.stepOptions = [];

        for (var i = 1; i <= 10; ++i) {
            $scope.stepOptions.push({
                value: i,
                text: 'Step ' + i
            });
        }

        $scope.open = open;

        $scope.opened = [];
        for (var i = 0; i < 2; i++) {
            $scope.opened.push(false);
        }
        function open(i) {
            $scope.opened[i] = !$scope.opened[i];
        }

        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.options = {
            showWeeks: false
        };

        $scope.peoples = [
            {
                id: 1,
                name: 'hoangnt15'
            },
            {
                id: 2,
                name: 'huynd14'
            }
        ];

        $scope.stepOptions.unshift({
            value: '',
            text: 'Select Step'
        });

        $scope.nextStep = function () {
            $scope.activeTab = 1;
            console.log($scope.activeTab);
        };

        $scope.previousStep = function () {
            $scope.activeTab = 0;
            console.log($scope.activeTab);
        };

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

