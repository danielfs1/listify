'use strict';

angular.module('listifyApp')
  .controller('ListCtrl', function ($scope, $routeParams, $http) {

    var request = $http.get('/list/' + $routeParams.id);

    request.success(function (data) {
      $scope.list = data.list;
      $scope.items = data.items;
      console.log($scope.items);
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

    $scope.delete = function(itemId) {
      var response = $http.delete('/item/' + itemId);
      response.success(function (data) {
        //$rootScope.lists = data.lists;
      });
    }

    // Save on enter press
    $scope.onEnter = function (keyEvent) {
      if(keyEvent.which == 13) {
        $scope.addItem();
      }
    }

  });
