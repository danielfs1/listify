'use strict';

/**
 * @ngdoc function
 * @name listifyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the listifyApp
 */
angular.module('listifyApp')
  .controller('AboutCtrl', function ($scope, $rootScope, HelperService, List) {

    HelperService.setActiveLink("aboutClass");

    $scope.currentList = new List("test");

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
