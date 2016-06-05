module demoApp {
    export class AuthorsController {
        public authors: any = null;

        /** @ngInject */
        constructor(
        ) {
        }
    }

    angular.module('demoApp').controller('AuthorsController', AuthorsController);
}
