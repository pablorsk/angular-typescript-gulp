/// <reference path="../_all.ts" />

module demoApp {
    export class TwitterService {
        protected data = [];

        /** @ngInject */
        constructor(
            protected $websocket,
            protected $interval
        ) {
            console.log('wow');
            $interval( () => {
                console.log('working :)');
                this.data.push( {
                    text: 'texto'
                });
            }, 1000);
        }

        public get() {
            var dataStream = this.$websocket('ws://htv.matuu.com.ar/search/hackatec/10/');

            var collection = [];

            dataStream.onMessage(function(message) {
              collection.push(JSON.parse(message.data));
              console.log('collection push', message.data);
            });

            var methods = {
              collection: collection,
              get: function() {
                dataStream.send(JSON.stringify({ action: 'get' }));
              }
            };

            return methods;

        }

    }

    angular.module('demoApp').service('TwitterService', TwitterService);
}
