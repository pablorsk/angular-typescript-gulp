module demoApp {
    'use strict';

    export class TimelineController {
        public timeline: any = null;
        public books: any = null;

        /** @ngInject */
        constructor(
            TwitterService
        ) {
        }

    }

    angular.module('demoApp').controller('TimelineController', TimelineController);
}
