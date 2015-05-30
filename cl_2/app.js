// wrapping fonction in a clouser that is good idea
(function(){
  var gem = { name: 'Azurite', price: 2.95 };
  var app = angular.module('gemStore', []);
  //adding  A controller for gem
  app.controller('StoreController',function(){
    this.product=gem;
  });
  
})();
