import { NewJsonapiObjectCompany } from '../../components/jsonapi/new-jsonapi-object-company';

export class PricelistsService extends NewJsonapiObjectCompany {
    type = 'pricelists';
    public  schema = {
        type: 'pricelists',
        id: 'id',
        attributes: {
            company_id: { },
            name: { presence: true, length: { maximum: 96 } },
            percent_price: { presence: true, numericality: { greaterThanOrEqualTo: 0 } },
            percent_subdist: {},
            percent_prevent: {}
        }
    };

    /** @ngInject */
    public constructor(
        protected JsonapiServicesService
    ) {
        super(JsonapiServicesService);
        this.register();
    }
}
