'use strict';

angular.module('listifyApp')
  .controller('ListCtrl', function ($scope, $routeParams, $http) {

    $scope.getItems = function() {
      var request = $http.get('/list/' + $routeParams.id);
      request.success(function (data) {
        $scope.list = data.list;
        $scope.items = data.items;
        console.log($scope.items);
      });

      request.error(function (data) {
        console.log(data);
      });
    }

    $scope.addItem = function() {
      var response = $http.post('/item/', '{"listId" : "' + $routeParams.id + '", "name" : "' + $scope.newName + '"}');
      response.success(function (data) {
        console.log(data);
        $scope.getItems();
      });
      $scope.newName = "";
    }

    $scope.delete = function(itemId) {
      var response = $http.delete('/item/' + itemId);
      response.success(function (data) {
        $scope.getItems();
      });
    }

    // Save on enter press
    $scope.onEnter = function (keyEvent) {
      if(keyEvent.which == 13) {
        $scope.addItem();
      }
    }

    // On page load
    $scope.getItems();

  });
