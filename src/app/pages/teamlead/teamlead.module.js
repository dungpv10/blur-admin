/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.teamlead', ['ui.select', 'ngSanitize'])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('teamlead', {
            url: '/teamlead',
            template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
            abstract: true,
            title: 'Teamlead',
            sidebarMeta: {
              icon: 'ion-compose',
              order: 1,
            },
          })
          .state('teamlead.create', {
            url: '/create',
            templateUrl: 'app/pages/teamlead/create/create.html',
            controller: 'CreateCtrl',
            title: 'Tạo đơn hàng',
            sidebarMeta: {
              order: 1,
            },
          })
          .state('teamlead.list',
          {
            url: '/list',
            templateUrl: 'app/pages/teamlead/list/list.html',
            controller: 'ListTeamleadCtrl',
            controllerAs: 'vm',
            title: 'Danh sách đơn hàng',
            sidebarMeta: {
              order: 2,
            },
          })
          .state('teamlead.people', {
            url: '/people',
            templateUrl: 'app/pages/teamlead/assignPeople/assign-people.html',
            controller: 'AssignPeopleCtrl',
            title: 'Assign người chấm',
            sidebarMeta: {
              order: 3,
            },
          })
          .state('teamlead.converter', {
            url: '/converter',
            templateUrl: 'app/pages/teamlead/assignConvert/assign-convert.html',
            controller: 'AssignConvertCtrl',
            title: 'Assign to convert',
            sidebarMeta: {
              order: 4,
            },
          });
    }
  })();
  