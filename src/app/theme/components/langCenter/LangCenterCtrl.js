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
          image: 'assets/img/theme/icon/lang/vietnam-svg.png',
          text: 'Vietnamese'
        },
        {
            langId: 1,
            image: 'assets/img/theme/icon/lang/english-svg.png',
            text: 'English'
        }
      ];

      $scope.curLang = $scope.languages[0];
      
      $scope.selectLanguage = function (lang) {
        $scope.curLang = lang;
      }

      $scope.getCurLang = function(lang) {
        var text = lang.text;
        return $sce.trustAsHtml(text);
      };
    }
  })();