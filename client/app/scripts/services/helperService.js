'use strict';

/**
 * @ngdoc service
 * @name listifyApp.Helperservice
 * @description
 * # Helperservice
 * Service in the listifyApp.
 */
angular.module('listifyApp')
  .service('HelperService', function HelperService($http, $rootScope, ListService) {
    this.setActiveLink = function(className) {
      $rootScope.aboutClass = "";
      $rootScope.homeClass = "";
      $rootScope.contactClass = "";
      $rootScope.listsClass = "";
      $rootScope[className] = "active";
    };

    this.getLists = function() {
      var lists = ListService.query(function() {
        $rootScope.lists = lists;
      });
    }

  });
