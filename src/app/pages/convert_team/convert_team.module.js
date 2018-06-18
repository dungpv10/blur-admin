/**
 * @author k.danovsky
 * created on 15.01.2016
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.convert_team', [
    'BlurAdmin.pages.convert_team.mail',
    // 'BlurAdmin.pages.convert_team.timeline',
    // 'BlurAdmin.pages.convert_team.tree',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('convert_team', {
          url: '/convert_team',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: 'Đội convert',
          sidebarMeta: {
            icon: 'ion-gear-a',
            order: 100,
          },
        });
  }

})();
