module demoApp {
    export class TimelineController {
        public search = '';
        public collection = [];

        /** @ngInject */
        constructor (
            protected TwitterService,
            protected $routeParams
        ) {
            this.search = $routeParams.search;
            this.collection = TwitterService.data;
            console.log('ddd', TwitterService.get());
        }
    }

    angular.module('demoApp').controller('TimelineController', TimelineController);
}