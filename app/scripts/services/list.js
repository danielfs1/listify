'use strict';

/**
 * @ngdoc service
 * @name listifyApp.List
 * @description
 * # List
 * Factory in the listifyApp.
 */
angular.module('listifyApp')
  .factory('List', ['$http', function($scope, $rootScope, $http) {
    function List(listName) {
        this.name = listName
        // Some other initializations related to book
    };
    List.prototype = {
        setData: function(listData) {
            angular.extend(this, listData);
        },
        load: function(id) {
            var scope = this;
            // $http.get('ourserver/books/' + bookId).success(function(bookData) {
            //     scope.setData(bookData);
            // });
        },
        delete: function() {
            //$http.delete('ourserver/books/' + bookId);
        },
        update: function() {
            //$http.put('ourserver/books/' + bookId, this);
        },
        getImageUrl: function(width, height) {
            //return 'our/image/service/' + this.book.id + '/' + width + '/' + height;
        }
    };
    return List;
}]);
