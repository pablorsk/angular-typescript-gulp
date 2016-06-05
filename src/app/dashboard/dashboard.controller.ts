export class DashboardController {
    protected companyName: any;
    /** @ngInject */
    constructor(
        protected GlobalStateService,
        protected $scope,
        protected $http,
        protected store
    ) {
        $scope.page = {
            title: 'Dashboard',
            subtitle: 'Place subtitle here...'
        };

        this.companyName = store.get('companyName');
    }
}
