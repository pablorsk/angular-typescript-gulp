module demoApp {
    export class TimelinesController {
        public timelines: any = null;

        /** @ngInject */
        constructor(
        ) {
        }
    }

    angular.module('demoApp').controller('TimelinesController', TimelinesController);
}
