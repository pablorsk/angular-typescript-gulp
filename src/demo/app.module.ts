/// <reference path="./_all.ts" />

((): void => {
    var app = angular.module('demoApp', ['ngRoute']);

    app.config(['$routeProvider', ($routeProvider, $socketProvider) => {
        $routeProvider.when('/', {
            controller: 'HomeController',
            templateUrl: 'timeline/home.html',
            controllerAs: 'vm'
        })
        .when('/timeline/:search', {
            controller: 'TimelineController',
            templateUrl: 'timeline/timeline.html',
            controllerAs: 'vm'
        });

        //$socketProvider.setUrl('ws://htv.matuu.com.ar/search/hackatec/');
    }]);
})();
