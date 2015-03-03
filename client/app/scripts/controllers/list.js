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

    var request = $http.get('/lists');

    request.success(function (data) {

    });

    request.error(function (data) {

    });

  });
