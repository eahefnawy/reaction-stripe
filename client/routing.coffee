Router.map ->
  @route 'stripe',
    controller: ShopAdminController
    path: 'dashboard/settings/stripe',
    template: 'stripe'
    waitOn: ->
      PackagesHandle
  @route 'stripetest',
    controller: ShopAdminController
    path: 'stripetest',
    template: 'test'
    waitOn: ->
      PackagesHandle