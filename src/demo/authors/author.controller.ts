module demoApp {
    'use strict';

    export class AuthorController {
        public author: any = null;
        public books: any = null;

        /** @ngInject */
        constructor(
        ) {
        }

    }

    angular.module('demoApp').controller('AuthorController', AuthorController);
}
