module demoApp {
    'use strict';

    export class GlobalController {
        /** @ngInject */
        public constructor(
            protected $scope
        ) {

        }
    }

    angular.module('demoApp').controller('GlobalController', GlobalController);
}
