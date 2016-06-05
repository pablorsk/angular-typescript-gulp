export class PricelistsEditController {
    public pricelist: any;
    public contracts: any;

    /** @ngInject */
    constructor(
        protected $scope,
        protected $state,
        protected $stateParams,
        protected RequestStatusService,
        protected PricelistsService
    ) {

        let object_id = $stateParams.objectId * 1;
        if (object_id > 0) {
            this.pricelist = PricelistsService.get(object_id);
        } else {
            this.pricelist = PricelistsService.new();
        }

        // just for view purposes
        this.contracts = PricelistsService.getSchema().attributes;
    }

    public save() {
        this.pricelist.save(
            success => {
                this.$state.go('company.pricelists');
            },
            error => {
                this.RequestStatusService.process_error(error, this);
            }
        );
    }
}
