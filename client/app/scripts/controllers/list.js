'use strict';

/**
 * @ngdoc function
 * @name listifyApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the listifyApp
 */
angular.module('listifyApp')
  .controller('ListCtrl', function ($scope, $routeParams, $http) {

    var request = $http.get('/list/' + $routeParams.id);

    request.success(function (data) {
      $scope.list = data.list;
    });

    request.error(function (data) {
      console.log(data);
    });

    $scope.addItem = function() {
      var response = $http.post('/item/', '{"listId" : "' + $routeParams.id + '", "name" : "' + $scope.newName + '"}');
      response.success(function (data) {
        console.log(data);
      });
      $scope.newName = "";
    }

    // Save on enter press
    $scope.onEnter = function (keyEvent) {
      if(keyEvent.which == 13) {
        $scope.addItem();
      }
    }

  });
