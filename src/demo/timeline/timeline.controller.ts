module demoApp {
    export class TimelineController {
        public search = '';
        public collection = {};

        /** @ngInject */
        constructor (
            protected TwitterService,
            protected $routeParams
        ) {
            this.search = $routeParams.search;
            console.log('ddd', TwitterService.get());
        }
    }

    angular.module('demoApp').controller('TimelineController', TimelineController);
}
