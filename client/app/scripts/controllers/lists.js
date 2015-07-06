'use strict';

/**
 * @ngdoc function
 * @name listifyApp.controller:ListsCtrl
 * @description
 * # ListsCtrl
 * Controller of the listifyApp
 */
angular.module('listifyApp')
  .controller('ListsCtrl', function ($scope, $rootScope, HelperService, ListService, $location) {
    HelperService.setActiveLink("listsClass");
    $rootScope.lists = ListService.query();

    $scope.createNew = function() {
      var list = new ListService();
      list.name = $scope.newName;
      ListService.save(list, function(){
        $rootScope.lists = ListService.query();
      });
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
      ListService.delete({id: listId}, function() {
        $rootScope.lists = ListService.query();
      });
    }

  });
