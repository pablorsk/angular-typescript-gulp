
/** @ngInject */
export function config(
    jwtInterceptorProvider,
    $translateProvider,
    $urlRouterProvider,
    $mdThemingProvider,
    // uiSelectConfig,
    $stateProvider,
    $httpProvider,
    $logProvider,
    // toastrConfig,
    rsJsonapiConfig,
    AppSettings,
    NotificationProvider,
    $provide
) {
    // jsonapi library
    angular.extend(rsJsonapiConfig, {
        url: AppSettings.APIURL
    });

    NotificationProvider.setOptions({
        delay: 15000,
        startTop: 80,
        startRight: 25,
        verticalSpacing: 15,
        horizontalSpacing: 15,
        positionX: 'right',
        positionY: 'top'
    });

    // Enable log
    $logProvider.debugEnabled(false);

    // ---------------------start-uiSelectConfig---------------------------------
    // uiSelectConfig.theme = 'bootstrap';
    // ---------------------end-uiSelectConfig-----------------------------------

    // -start thems material design...
    $mdThemingProvider.generateThemesOnDemand(true);
    $provide.value('themeProvider', $mdThemingProvider);
    $mdThemingProvider.theme('customTheme');
    $mdThemingProvider.theme('themeApp');
    // $mdThemingProvider.theme('customThemeSidenav');
    // $mdThemingProvider.alwaysWatchTheme(true);
    // // -end thems material design...

    // -------------------start-$translateProvider-------------------------------
    // $translateProvider.useStaticFilesLoader({
    //     prefix: 'languages/',
    //     suffix: '.json'
    // });
    // $translateProvider.useLocalStorage();
    // $translateProvider.preferredLanguage('en');
    // $translateProvider.useSanitizeValueStrategy(null);
    // --------------------end-$translateProvider--------------------------------

    // en cada peticion enviamos el token a través de los headers con el nombre
    // Authorization.
    jwtInterceptorProvider.tokenGetter = function () {
        var tokenLocalStorage = angular.fromJson(localStorage.getItem('token'));
        return tokenLocalStorage;
    };
    $httpProvider.interceptors.push('jwtInterceptor');
    var cond = 0;
    /*if (cond === 0) {
    $urlRouterProvider.otherwise('/core/login');
}else {
cond = 1;
$urlRouterProvider.otherwise('/core/notFound');

}*/
// switch para redirecionar los errores.
switch (cond) {
    case 0:
    $urlRouterProvider.otherwise('/core/login');
    break;
    case 1:
    $urlRouterProvider.otherwise('/core/notFound');
    break;
    case 2:
    $urlRouterProvider.otherwise('/core/notFound-dashboard');
    break;

}
}
