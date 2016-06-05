/// <reference path="../_all.ts" />

module demoApp {
    export class TwitterService {

        /** @ngInject */
        constructor(
            protected   $twitterApi
        ) {
            $twitterApi.configure(clientId, clientSecret, oauthToken);
            $twitterApi.getHomeTimeline({count: 5}).then(function(data) {
                console.log(data);
            }, function(error) {
                console.log('err: ' + error);
            });

        }

    }

    angular.module('demoApp').service('TwitterService', TwitterService);
}
