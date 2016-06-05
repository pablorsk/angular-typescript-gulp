export class MainController {
    constructor($scope, $http,
        $translate
        //  $jsonapi
     ) {
        'ngInject';

        // constants...
        const vm = this;

        // instance...
        vm.getScope = $scope;
        vm.getHttp = $http;

        // json-api...
        // $scope.namesPages = $jsonapi.listResources(); //recordar revisar por q antes era names_pages...
        // $scope.localStoreSize = $jsonapi.sourceLocal.size;
        ///////////////////////////////////////////////////////////////////////////////////////////////

        $scope.main = {
            title: 'Colmena',
            settings: {
                navbarHeaderColor: 'schema-default',
                sidebarColor: 'schema-default',
                brandingColor: 'shcema-default',
                activeColor: 'default-schema-color',
                headerFixed: true,
                asideFixed: true,
                rightbarShow: false
            }
        }

        $scope.ajaxFaker = function(){
            $scope.data=[];
            var url = 'http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&delay=5&callback=JSON_CALLBACK';

            $http.jsonp(url).success(function(data){
                $scope.data=data;
                angular.element('.tile.refreshing').removeClass('refreshing');
            });
        };

        $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
            $scope.currentLanguage = langKey;
        };
        $scope.currentLanguage = $translate.proposedLanguage() || $translate.use();
    }
}
