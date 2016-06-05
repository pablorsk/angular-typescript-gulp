export class HeaderController {
    protected entities: any = [];
    protected user: any = {};
    protected colors: any = {};

    /** @ngInject */
    constructor(
        protected CompanyThemesService,
        protected GlobalStateService,
        protected LoggedStateService,
        protected $stateParams,
        protected $state
    ) {
        this.entities = [
            { name: 'Nahuel', status: true },
            { name: 'Marck', status: false },
            { name: 'Nancy', status: true },
            { name: 'Dian', status: false },
            { name: 'Max', status: true }
        ];
    }

    logout() {
        this.GlobalStateService.logout();
    }

    changeCompany(object) {
        this.$state.go('company.dashboard', { companyId: object.id });
    }
}
