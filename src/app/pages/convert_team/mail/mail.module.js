/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.convert_team.mail', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('convert_team.mail', {
          url: '/mail',
          abstract: true,
          templateUrl: 'app/pages/convert_team/mail/mail.html',
          controller: "MailTabCtrl",
          controllerAs: "tabCtrl",
          title: 'Mail',
          sidebarMeta: {
            order: 0,
          },
        }).state('convert_team.mail.label', {
          url: '/:label',
          templateUrl: 'app/pages/convert_team/mail/list/mailList.html',
          title: 'Mail',
          controller: "MailListCtrl",
          controllerAs: "listCtrl"
        }).state('convert_team.mail.detail', {
          url: '/:label/:id',
          templateUrl: 'app/pages/convert_team/mail/detail/mailDetail.html',
          title: 'Mail',
          controller: "MailDetailCtrl",
          controllerAs: "detailCtrl"
        });
    $urlRouterProvider.when('/convert_team/mail','/convert_team/mail/inbox');
  }

})();
