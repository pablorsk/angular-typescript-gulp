/// <reference path="./_all.ts" />

((): void => {
    var app = angular.module('demoApp', ['ngRoute']);

    app.config(['$routeProvider', ($routeProvider) => {
        $routeProvider.when('/', {
            controller: 'AuthorsController',
            templateUrl: 'authors/authors.html',
            controllerAs: 'vm'
        })
        .when('/authors/author/:authorId', {
            controller: 'AuthorController',
            templateUrl: 'authors/author.html',
            controllerAs: 'vm'
        })
    }]);

})();
