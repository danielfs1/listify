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

  });
