/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.sourceteam.upload_one_contact', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('source.upload_one_contact', {
          url: '/upload_one_contact',
          abstract: true,
          templateUrl: 'app/pages/sourceTeam/upload_one_contact/mail.html',
          controller: "MailTabCtrl",
          controllerAs: "tabCtrl",
          title: 'Upload 1 Contact',
          sidebarMeta: {
            order: 0,
          },
        }).state('source.upload_one_contact.label', {
          url: '/:label',
          templateUrl: 'app/pages/sourceTeam/upload_one_contact/list/mailList.html',
          title: 'Upload 1 Contact',
          controller: "MailListCtrl",
          controllerAs: "listCtrl"
        }).state('source.upload_one_contact.detail', {
          url: '/:label/:id',
          templateUrl: 'app/pages/sourceTeam/upload_one_contact/detail/mailDetail.html',
          title: 'Mail',
          controller: "MailDetailCtrl",
          controllerAs: "detailCtrl"
        });
    $urlRouterProvider.when('/source/upload_one_contact','/source/upload_one_contact/inbox');
  }

})();
