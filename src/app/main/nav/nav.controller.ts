export class NavController {
    protected status: any = {};
    protected collectionEntityTypes: any = [];
    protected companyLogo: string;
    protected companyName: any;
    protected colors: any = {};
    protected permissions = {};

    /** @ngInject */
    constructor(
        protected GlobalStateService,
        protected CompanyStateService,
        protected CompaniesService,
        protected CompanyThemesService,
        protected EntityTypesService,
        protected ParamsService,
        protected $stateParams,
        protected $state
    ) {
        this.status = {
            isFirstOpen: true,
            isSecondOpen: true,
            isThirdOpen: true
        };

        this.collectionEntityTypes = EntityTypesService.typesCollection;
        this.permissions = CompanyStateService.permissions;
    }

    public changeCompany(object) {
        this.$state.go('company.dashboard', { companyId: object.id });
    }
}
