/** @ngInject */
export function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    /***************************************
    **              CORE                  **
    ***************************************/
    .state('core', {
        abstract: true,
        url: '/core',
        template: '<div ui-view> </div>',
        controller: 'CoreRouteController'
    })
    .state('core.login', {
        reload: true,
        url: '/login',
        templateUrl: 'app/core/login/login.html',
        controller: 'LoginController',
        controllerAs: 'login'
    })
    .state('core.signup', {
        url: '/signup',
        templateUrl: 'app/core/signup/signup.html',
        controller: 'SignupController as vm'
    })
    .state('core.message-success', {
        url: '/message/:type',
        templateUrl: 'app/core/message/message.html',
        controller: 'MessageController as vm'
    })
    .state('core.resetpassword', {
        url: '/resetpassword',
        templateUrl: 'app/core/forgotpass/reset_password/reset-password.html',
        controller: 'ResetPasswordController as vm'
    })
    .state('core.forgotpass', {
        url: '/forgotpass/',
        templateUrl: 'app/core/forgotpass/forgotpass.html',
        controller: 'ForgotPassController as vm'
    })
    .state('core.page-notfound', {
        url: '/notFound',
        templateUrl: 'app/components/generic_view/page-notfound.html',
        controller: 'PageNotFoundController',
        controllerAs: 'PageNotFound'
    })
    .state('core.page-notfound-dashboard', {
        url: '/notFound-dashboard',
        templateUrl: 'app/components/generic_view/page-notfound-dashboard.html',
        controller: 'PageNotFoundController',
        controllerAs: 'PageNotFound'
    })
    .state('core.response-invitation', {
        url: '/response/invitation',
        templateUrl: 'app/core/response_invitation/response-invitation-edit.html',
        controller: 'ResponseInvitationEditController as responseInvitationEdit'
    })

    /***************************************
    **              LOCKED                **
    ***************************************/
    .state('locked', {
        abstract: true,
        url: '',
        template: '<div ui-view></div>',
        controller: 'LockedRouteController'
    })
    .state('locked.companies', {
        url: '/company',
        templateUrl: 'app/locked/select-company.html',
        controller: 'CompanySelectController as vm'
    })
    .state('locked.create-company', {
        url: '/create/company',
        templateUrl: 'app/locked/create_company/create-company.html',
        controller: 'CreateCompanyController',
        controllerAs: 'createCompany'
    })

    /***************************************
    **              COMPANY               **
    ***************************************/
    .state('company', {
        abstract: true,
        url: '/company/:companyId',
        templateUrl: 'app/main/app.html',
        controller: 'CompanyRouteController'
    })
    .state('company.dashboard', {
        url: '/dashboard',
        controller: 'DashboardController',
        controllerAs: 'dashboard',
        templateUrl: 'app/dashboard/dashboard.html'
    })
    .state('company.products', {
        url: '/products/',
        templateUrl: 'app/products/products-list.html',
        controller: 'ProductsListController as vm'
    })
    .state('company.product', {
        url: '/product/:objectId',
        templateUrl: 'app/products/products-edit.html',
        controller: 'ProductsEditController',
        controllerAs: 'product'
    })
    .state('company.categories', {
        url: '/categories',
        templateUrl: 'app/products/categories/categories-list.html',
        controller: 'CategoriesListController as vm'
    })
    .state('company.category', {
        url: '/category/:objectId',
        templateUrl: 'app/products/categories/categories-edit.html',
        controller: 'CategoriesEditController',
        controllerAs: 'category'
    })
    .state('company.pricelists', {
        url: '/pricelists',
        templateUrl: 'app/products/pricelists/pricelists-list.html',
        controller: 'PricelistsListController as vm'
    })
    .state('company.pricelist', {
        url: '/pricelist/:objectId',
        templateUrl: 'app/products/pricelists/pricelists-edit.html',
        controller: 'PricelistsEditController as vm'
    })
    .state('company.entities', {
        url: '/entities/:key_name',
        templateUrl: 'app/entities/entities-list.html',
        controller: 'ListEntityController as vm'
    })
    .state('company.entity', {
        url: '/entity/:objectId',
        templateUrl: 'app/entities/entities-edit.html',
        controller: 'EntitiesEditController as vm'
    })
    .state('company.company-config', {
        url: '/company/config',
        templateUrl: 'app/companies/company_config/company-config.html',
        controller: 'CompanyConfigController',
        controllerAs: 'companyConfig'
    })
    .state('company.orders', {
        url: '/orders',
        templateUrl: 'app/orders/orders-list.html',
        controller: 'OrderListController as vm'
    })
    .state('company.order', {
        url: '/order/:receiptType/:objectId',
        templateUrl: 'app/orders/orders-edit.html',
        controller: 'OrdersController as vm'
    })
    .state('company.quotations', {
        url: '/quotations',
        templateUrl: 'app/quotations/quotations-list.html',
        controller: 'QuotationListController as vm'
    })
    .state('company.quotation', {
        url: '/quotations/:receiptType/:objectId',
        templateUrl: 'app/quotations/quotations-edit.html',
        controller: 'QuotationEditController as vm'
    })
    .state('company.users', {
        url: '/users',
        templateUrl: 'app/users/users-list.html',
        controller: 'UsersListController as vm'
    })
    .state('company.users-invitation', {
        url: '/users/invitation',
        templateUrl: 'app/users/invitation/invitation.html',
        controller: 'InvitationController as vm'
    })
    .state('company.roles', {
        url: '/roles/settings',
        templateUrl: 'app/users/roles/roles-list.html',
        controller: 'RolesListController as vm'
    })
    .state('company.permissions-edit', {
        url: '/rol/:objectId',
        templateUrl: 'app/users/permissions/permissions-edit.html',
        controller: 'PermissionsEditController as permissionsEdit'
    })
    .state('company.jsonapi', {
        url: '/jsonapi',
        templateUrl: 'app/demo/jsonapi/demo-jsonapi.html',
        controller: 'DemoJsonapi as vm'
    })
    .state('company.profile-edit', {
        url: '/profile',
        templateUrl: 'app/main/profile/profile-edit.html',
        controller: 'ProfileEditController as profileEdit'
    })

    /***************************************
    **              DEMO                  **
    ***************************************/
    .state('demos', {
        abstract: true,
        url: '/demos',
        template: '<div ui-view></div>'
    })
    .state('demos.price', {
        url: '/price',
        templateUrl: 'app/demo/demo-complex-price.html',
        controller: 'DemoComplexPrice as demo'
    })
    .state('demos.validate', {
        url: '/validate',
        templateUrl: 'app/demo/demo-rs-validate.html',
        controller: 'DemoRsValidate as validate'
    })
    .state('demos.chat', {
        url: '/chat',
        templateUrl: 'app/demo/chat/chat.html',
        controller: 'ChatController as vm'
    })
    .state('company.chat', {
        url: '/chat2',
        templateUrl: 'app/chat/chat.html',
        controller: 'Chat2Controller as vm'
    })
    ;
}
