Package.describe({
  summary: "Reaction Stripe - Stripe Payment Module for Reaction commerce"
});

Npm.depends({'stripe': '2.7.3'});

Package.on_use(function (api, where) {
  api.use([
    "templating",
    "coffeescript",
    "iron-router",
    "simple-schema",
    "autoform",
    "underscore-string-latest",
    "less",
    "reaction-core"
  ], ["client", "server"]);

  api.add_files([
    "common/collections.coffee",
    "common/register.coffee"
  ],["client","server"]);

  api.add_files("server/stripe.coffee",["server"]);
  api.add_files([
    "client/routing.coffee",
    "client/templates/stripe.html",
    "client/templates/stripe.coffee",
    "client/templates/stripePaymentForm/stripePaymentForm.html",
    "client/templates/stripePaymentForm/stripePaymentForm.coffee"
  ], ["client"]);  
});