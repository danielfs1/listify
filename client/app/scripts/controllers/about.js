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

  });
