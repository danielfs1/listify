'use strict';

angular.module('listifyApp')
  .factory('ListService', function ListService($resource) {
    return $resource('/lists/:id');
  });
