/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.theme.components')
        .controller('LangCenterCtrl', LangCenterCtrl);
  
    /** @ngInject */
    function LangCenterCtrl($scope, $sce) {      
  
      $scope.languages = [
        {
          langId: 0,
          image: '',
          text: 'Vietnamese'
        },
        {
            langId: 1,
            image: '',
            text: 'English'
        }
      ];
  
      $scope.getMessage = function(msg) {
        var text = msg.template;
        if (msg.userId || msg.userId === 0) {
          text = text.replace('&name', '<strong>' + $scope.users[msg.userId].name + '</strong>');
        }
        return $sce.trustAsHtml(text);
      };
    }
  })();