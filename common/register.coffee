ReactionCore.registerPackage
  name: "reaction-stripe"
  provides: ['paymentMethod']
  label: "Stripe"
  description: "Stripe Payment for Reaction Commerce"
  icon: "fa fa-globe"
  settingsRoute: "stripe"
  defaultSettings:
    api_key: ""
  hasWidget: false
  autoEnable: false
  priority: "2"
  shopPermissions: [
    {
      label: "Stripe Payments"
      permission: "dashboard/payments"
      group: "Shop Settings"
    }
  ]