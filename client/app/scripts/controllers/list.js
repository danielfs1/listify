'use strict';

/**
 * @ngdoc function
 * @name listifyApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the listifyApp
 */
angular.module('listifyApp')
  .controller('ListCtrl', function ($scope, $routeParams, $firebase) {
    var ref = new Firebase("https://listify-keystone.firebaseio.com/lists/" + $routeParams.id);

    var sync = $firebase(ref);

    $scope.list = sync.$asObject();



  });
