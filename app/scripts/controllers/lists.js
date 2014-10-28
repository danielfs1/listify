'use strict';

/**
 * @ngdoc function
 * @name listifyApp.controller:ListsCtrl
 * @description
 * # ListsCtrl
 * Controller of the listifyApp
 */
angular.module('listifyApp')
  .controller('ListsCtrl', function ($scope, $rootScope, HelperService, $firebase, List) {
    HelperService.setActiveLink("listsClass");

    var ref = new Firebase("https://listify-keystone.firebaseio.com/lists");

    var sync = $firebase(ref);

    $rootScope.lists = sync.$asArray();

    //console.log($scope.lists);

    $scope.createNew = function() {
      // console.log('createnew');
      $rootScope.lists.$add(new List($scope.newListName));
      $scope.newListName = "";
    }

    // Save on enter press
    $scope.onEnter = function (keyEvent) {
      if(keyEvent.which == 13) {
        $scope.createNew();
      }
    }

    $scope.delete = function(list) {
      sync.$remove(this.list.$id);
    }

  });
