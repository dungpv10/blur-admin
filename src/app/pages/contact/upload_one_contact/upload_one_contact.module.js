/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.contact.upload_one_contact', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('contact.upload_one_contact', {
          url: '/upload_one_contact',
          abstract: true,
          templateUrl: 'app/pages/contact/upload_one_contact/mail.html',
          controller: "MailTabCtrl",
          controllerAs: "tabCtrl",
          title: 'Upload 1 Contact',
          sidebarMeta: {
            order: 0,
          },
        }).state('contact.upload_one_contact.label', {
          url: '/:label',
          templateUrl: 'app/pages/contact/upload_one_contact/list/mailList.html',
          title: 'Upload 1 Contact',
          controller: "MailListCtrl",
          controllerAs: "listCtrl"
        }).state('contact.upload_one_contact.detail', {
          url: '/:label/:id',
          templateUrl: 'app/pages/contact/upload_one_contact/detail/mailDetail.html',
          title: 'Mail',
          controller: "MailDetailCtrl",
          controllerAs: "detailCtrl"
        });
    $urlRouterProvider.when('/contact/upload_one_contact','/contact/upload_one_contact/inbox');
  }

})();
