'use strict';

/**
 * @ngdoc service
 * @name listifyApp.Helperservice
 * @description
 * # Helperservice
 * Service in the listifyApp.
 */
angular.module('listifyApp')
  .service('HelperService', function HelperService($rootScope) {
    this.setActiveLink = function(className) {
      $rootScope.aboutClass = "";
      $rootScope.homeClass = "";
      $rootScope.contactClass = "";
      $rootScope.listsClass = "";
      $rootScope[className] = "active";
    };

    // this.getListCount = function() {
    //    console.log(ListsCtrl.getItems().size());
    // };
  });
