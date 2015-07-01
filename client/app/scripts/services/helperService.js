'use strict';

/**
 * @ngdoc service
 * @name listifyApp.Helperservice
 * @description
 * # Helperservice
 * Service in the listifyApp.
 */
angular.module('listifyApp')
  .service('HelperService', function HelperService($http, $rootScope) {
    this.setActiveLink = function(className) {
      $rootScope.aboutClass = "";
      $rootScope.homeClass = "";
      $rootScope.contactClass = "";
      $rootScope.listsClass = "";
      $rootScope[className] = "active";
    };

    this.getLists = function() {
      var response = $http.get('/lists');

      response.success(function (data) {
        $rootScope.lists = data.lists;
        console.log(data);
      });

      response.error(function (data) {
        console.log("error");
      });
    }

  });
