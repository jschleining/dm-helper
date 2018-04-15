var app = angular.module('dmHelperApp');

app.component('cityBuilder', {
  bindings: {
    config: '<'
  },
  controller: 'CityBuilderController',
  controllerAs: 'vm',
  templateUrl: 'global/components/city-builder/city-builder.view.html'
});