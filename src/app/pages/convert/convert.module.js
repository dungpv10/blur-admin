/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.convert', ['ui.select', 'ngSanitize'])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
      $stateProvider
          .state('convert', {
            url: '/convert',
            template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
            abstract: true,
            title: 'Convert',
            sidebarMeta: {
              icon: 'ion-person',
              order: 2,
            },
          })
          .state('convert.recruitment', {
            url: '/recruitment',
            templateUrl: 'app/pages/convert/recruitment/recruitment.html',
            controller: 'RecruitmentCtrl',
            title: 'Mời ứng tuyển',
            sidebarMeta: {
              order: 1,
            },
          })
          .state('convert.speedDate',
          {
            url: '/speed-date',
            templateUrl: 'app/pages/convert/speedDate/speed-date.html',
            controller: 'SpeedDateCtrl',
            controllerAs: 'vm',
            title: 'Speed Date',
            sidebarMeta: {
              order: 2,
            },
          })
          .state('convert.interview', {
            url: '/interview',
            templateUrl: 'app/pages/convert/interview/interview.html',
            controller: 'InterviewCtrl',
            title: 'Phỏng vấn chuyên môn',
            sidebarMeta: {
              order: 3,
            },
          })
          .state('convert.culturalInterview', {
            url: '/cultural-interview',
            templateUrl: 'app/pages/convert/culturalInterview/cultural-interview.html',
            controller: 'CulturalInterviewCtrl',
            title: 'Phỏng vấn văn hóa',
            sidebarMeta: {
              order: 4,
            },
          })
          .state('convert.gtat', {
            url: '/gtat',
            templateUrl: 'app/pages/convert/gtat/gtat.html',
            controller: 'GTATCtrl',
            title: 'GTAT',
            sidebarMeta: {
              order: 5,
            },
          })
          .state('convert.orientation',
          {
            url: '/orientation',
            templateUrl: 'app/pages/convert/orientation/orientation.html',
            controller: 'OrientationCtrl',
            controllerAs: 'vm',
            title: 'Orientation',
            sidebarMeta: {
              order: 6,
            },
          })
          .state('convert.offer', {
            url: '/offer',
            templateUrl: 'app/pages/convert/offer/offer.html',
            controller: 'OfferCtrl',
            title: 'Offer',
            sidebarMeta: {
              order: 7,
            },
          })
          .state('convert.schedule', {
            url: '/schedule',
            templateUrl: 'app/pages/convert/schedule/schedule.html',
            controller: 'ScheduleCtrl',
            title: 'Đặt lịch phỏng vấn',
            sidebarMeta: {
              order: 4,
            },
          });
    }
  })();
  