var app = angular.module('demographicsModule', [
  'ui.router',
  'ngMaterial'
]);

app.controller('DemographicsController', ['Utilities', function (Utilities) {
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
