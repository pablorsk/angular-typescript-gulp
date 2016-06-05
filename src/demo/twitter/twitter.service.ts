/// <reference path="../_all.ts" />

module demoApp {
    export class TwitterService {
        protected data = [];

        /** @ngInject */
        constructor(
            protected $interval,
            protected $http
        ) {
            console.log('wow');
            $interval( () => {
                console.log('working :)');
                this.data.push( {
                    text: 'texto',
                    url: 'gfffff'
                                });
            }, 1000);
        }

    }

    angular.module('demoApp').service('TwitterService', TwitterService);
}
