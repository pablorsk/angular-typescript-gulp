module demoApp {
    'use strict';

    export class GlobalController {
        /** @ngInject */
        public constructor(
            protected $scope
        ) {
            let self = this;
        }
    }

    angular.module('demoApp').controller('GlobalController', GlobalController);
}
