const AppSettings = { };

AppSettings.ENV = 'develop';
AppSettings.APIURL = 'http://reyesoft.ddns.net:9999/v1/';
// AppSettings.APIURL = 'http://192.168.8.80:9999/v1/';

angular.module('colmena').constant('AppSettings', AppSettings);
