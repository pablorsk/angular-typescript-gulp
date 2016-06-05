import { ListBaseController } from '../../components/view-services/list-base-controller';

export class PricelistsListController extends ListBaseController {
    protected pricelists: any;

    /** @ngInject */
    constructor(
        protected PricelistsService,
        protected $stateParams,
        protected $filter,
        protected $state
    ) {
        super();
        let self = this;
        this.pricelists = PricelistsService.all(
            success => {
                self.pricelists = $filter('toArray')(self.pricelists);
            }
        );
    }

    public show(object) {
        this.$state.go('company.pricelist', { objectId: object.id });
    }

    public delete(items) {
        let self = this;
        angular.forEach(items, function (item) {
            self.PricelistsService.delete(item.id,
                success => {
                    console.log('success');
                },
                error => {
                    console.log('error', error);
                });
            });
        }
    }
