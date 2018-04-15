var app = angular.module('citiesModule', [
  'ui.router',
  'ngMaterial'
]);

app.controller('CitiesController', ['Utilities', function (Utilities) {
  var vm_ = this;
  vm_.settings = {

  };

  activate_();

  /**
   * Initial activation of Dashboard Controller.
   */
  function activate_() {

  }
}]);
