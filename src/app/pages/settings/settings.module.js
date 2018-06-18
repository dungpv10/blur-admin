/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.setting', ['ui.select', 'ngSanitize'])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('setting', {
            url: '/settings',
            template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
            abstract: true,
            title: 'Settings',
            sidebarMeta: {
              icon: 'ion-gear-a',
              order: 6,
            },
          })
          .state('setting.userManagement', {
            url: '/user-management',
            templateUrl: 'app/pages/settings/userManagement/user-management.html',
            controller: 'CreateCtrl',
            title: 'Người dùng',
            sidebarMeta: {
              order: 1,
            },
          })
          .state('setting.emailManagement',
          {
            url: '/email-management',
            templateUrl: 'app/pages/settings/emailManagement/email-mangement.html',
            controller: 'EmailManagementCtrl',
            controllerAs: 'vm',
            title: 'Email Template',
            sidebarMeta: {
              order: 2,
            },
          });
    }
  })();
  