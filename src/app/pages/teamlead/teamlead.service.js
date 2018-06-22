(function () {
    'use strict';

    var teamleadModule = angular.module('BlurAdmin.pages.teamlead');

      /** @ngInject */
    teamleadModule.factory('teamleadService', function() {
        var factory = {};

        factory.getListPageSize = function() {
            return [
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
        };

        factory.getListOrder = function () {
            return [
                {
                    value: 'asc',
                    text: 'Ascending'
                },
                {
                    value: 'desc',
                    text: 'Descending'
                }
            ];
        };

        factory.getListDisplayColumns = function () {
            return [
                {
                    value: 'code',
                    text: 'Order Code'
                },
                {
                    value: 'name',
                    text: 'Order Name'
                },
                {
                    value: 'teamlead',
                    text: 'Teamlead'
                },
                {
                    value: 'kpi',
                    text: 'KPI'
                },
                {
                    value: 'deadline',
                    text: 'Deadline'
                },
                {
                    value: 'proposer',
                    text: 'Proposer'
                },
                {
                    value: 'linkjd',
                    text: 'Link JD'
                }
            ];
        }

        factory.getListFullname = function () {
            var listFullname = [];
            for (var i = 0; i < 10; ++i) {
                listFullname.push({
                    id: i,
                    name: 'Tran Tuan Anh'
                });
            }
            return listFullname;
        }

        factory.getListStatus = function () {
            return [
                {
                    id: 0,
                    name: 'Start'
                },
                {
                    id: 1,
                    name: 'In Progress'
                },
                {
                    id: 2,
                    name: 'Relsoved'
                },
                {
                    id: 3,
                    name: 'Complete'
                },
                {
                    id: 4,
                    name: 'Close'
                }
            ];
        }

        factory.getListResult = function () {
            return [
                {
                    id: 0,
                    name: 'Pending'
                },
                {
                    id: 1,
                    name: 'Pass'
                }
            ];
        }


        return factory;
    });
})();