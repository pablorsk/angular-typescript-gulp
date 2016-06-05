module demoApp {
    export class TimelineController {
        public search = '';
        public tweet = {};
        public i = 0;

        /** @ngInject */
        constructor (
            protected TwitterService,
            protected $routeParams,
            protected $interval
        ) {
            this.search = $routeParams.search;
            TwitterService.setText(this.search);

            this.$interval ( () => {
                this.next();
            }, 5000);
            this.next();
        }

        public next() {
            this.i++;
            if (!angular.isDefined(this.TwitterService.data[this.i])) {
                this.i = 0;
            }
            this.tweet = this.TwitterService.data[this.i];
        }
    }

    angular.module('demoApp').controller('TimelineController', TimelineController);
}
