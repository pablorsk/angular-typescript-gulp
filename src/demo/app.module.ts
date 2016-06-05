/// <reference path="./_all.ts" />

((): void => {
    var app = angular.module('demoApp', ['ngRoute', 'ngTwitter']);

    app.config(['$routeProvider', ($routeProvider) => {
        $routeProvider.when('/', {
            controller: 'TimelinesController',
            templateUrl: 'timelines/timelines.html',
            controllerAs: 'vm'
        })
        .when('/timelines/timeline/:timelineId', {
            controller: 'TimelineController',
            templateUrl: 'timelines/timeline.html',
            controllerAs: 'vm'
        })
    }]);

})();
