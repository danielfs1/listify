'use strict';

/**
 * @ngdoc function
 * @name listifyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the listifyApp
 */
angular.module('listifyApp')
  .controller('MainCtrl', function ($scope, $rootScope, HelperService, Profile, $http) {
    HelperService.setActiveLink("homeClass");
    // HelperService.getListCount();

    $scope.$on('oauth:login', function(event, token) {
      console.log('Authorized third party app with token', token.access_token);
      $scope.profile = Profile.get();
    });

    $scope.$on('oauth:authorized', function(event, token) {
      console.log('Authorized third party app with token', token.access_token);
      $scope.profile = Profile.get();

      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/plus/v1/people/me',
        params: {
          access_token: token.access_token
        }
      }).
        success(function(data, status, headers, config) {
          console.log(data);
          // this callback will be called asynchronously
          // when the response is available
        }).
        error(function(data, status, headers, config) {
          console.log("failure");
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });

    });

  });
