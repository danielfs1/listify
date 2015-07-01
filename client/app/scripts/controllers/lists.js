'use strict';

/**
 * @ngdoc function
 * @name listifyApp.controller:ListsCtrl
 * @description
 * # ListsCtrl
 * Controller of the listifyApp
 */
angular.module('listifyApp')
  .controller('ListsCtrl', function ($scope, $rootScope, HelperService, $http, List, $location) {
    HelperService.setActiveLink("listsClass");

    $scope.createNew = function() {
      var response = $http.post('/list/', '{"name" : "' + $scope.newName + '"}');
      response.success(function (data) {
        HelperService.getLists();
      });
      $scope.newName = "";
    }

    // Save on enter press
    $scope.onEnter = function (keyEvent) {
      if(keyEvent.which == 13) {
        $scope.createNew();
      }
    }

    $scope.view = function(listId) {
      $location.path('/list/' + listId);
    }

    $scope.delete = function(listId) {
      var response = $http.delete('/list/' + listId);
      response.success(function (data) {
        HelperService.getLists();
      });
    }

  });
