'use strict';

/**
 * @ngdoc overview
 * @name listifyApp
 * @description
 * # listifyApp
 *
 * Main module of the application.
 */
 /*
 https://github.com/yeoman/generator-angular#service
 http://www.sitepoint.com/kickstart-your-angularjs-development-with-yeoman-grunt-and-bower/
 */
angular
  .module('listifyApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'oauth'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/lists', {
        templateUrl: 'views/lists.html',
        controller: 'ListsCtrl'
      })
      .when('/access_token=:access_token', {
        template: '',
        controller: function ($location, AccessToken) {
          var hash = $location.path().substr(1);
          AccessToken.setTokenFromString(hash);
          $location.path('/');
          $location.replace();
        }
      })
      .otherwise({
        redirectTo: '/about'
      });
  }).run(function($rootScope, $firebase) {

  });
