/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.contact', ['ui.select', 'ngSanitize'])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider, teamleadServiceProvider) {
      $stateProvider
          .state('contact', {
            url: '/contact',
            template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
            abstract: true,
            title: 'Contact',
            sidebarMeta: {
              icon: 'ion-person',
              order: 1,
            },
          })
          .state('contact.list',
          {
            url: '/list',
            templateUrl: 'app/pages/contact/list/list.html',
            controller: 'ListContactCtrl',
            title: 'Contact',
            sidebarMeta: {
              order: 2,
            },
          })
          .state('contact.ranking', {
            url: '/ranking',
            templateUrl: 'app/pages/contact/ranking/ranking.html',
            controller: 'RankingCtrl',
            title: 'Ranking',
            sidebarMeta: {
              order: 3,
            },
          });
    }
  })();
  