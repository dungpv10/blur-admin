/**
 * @author a.demeshko
 * created on 12.21.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.sourceteam.upload_file_contact', [])
    .config(routeConfig)
    .config(function(){
      $.jstree.defaults.core.themes.url = true;
      $.jstree.defaults.core.themes.dir = "assets/img/theme/vendor/jstree/dist/themes";
    });

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('source.upload_file_contact', {
          url: '/upload_file_contact',
          templateUrl: 'app/pages/sourceTeam/upload_file_contact/upload_file_contact.html',
          title: 'Upload file contact',
          sidebarMeta: {
            order: 200,
          },
        });
  }

})();
