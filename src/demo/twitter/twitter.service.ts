/// <reference path="../_all.ts" />

module demoApp {
    export class TwitterService {
        public data = [{ text: 'loading...' }];
        public text = '';

        /** @ngInject */
        constructor(
            protected $interval,
            protected $http
        ) {
            let self = this;
            $interval( () => {
                self.reload();
            }, 70000);
        }

        public reload() {
            let self = this;

            this.$http({
                method: 'GET',
                url: 'http://htv.matuu.com.ar/json/' + self.text + '/'
            }).then( (response) => {
                self.data = response.data.data;
            }, function errorCallback(response) {
                alert('Error URL');
            });
        }

        public setText(texto) {
            this.text = texto;
            this.reload();
        }

    }

    angular.module('demoApp').service('TwitterService', TwitterService);
}
