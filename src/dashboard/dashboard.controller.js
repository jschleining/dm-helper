var app = angular.module('dashboardModule', [
  'ui.router',
  'ngMaterial'
]);

app.controller('DashboardController', ['Utilities', function (Utilities) {
  var vm_ = this;
  vm_.total = 0;
  vm_.numberOfDice = 1;
  vm_.min = 1;
  vm_.max = null;
  vm_.dice = [
    {
      size: 4,
      selected: false
    },
    {
      size: 6,
      selected: true
    },
    {
      size: 8,
      selected: false
    },
    {
      size: 10,
      selected: false
    },
    {
      size: 12,
      selected: false
    },
    {
      size: 20,
      selected: false
    },
    {
      size: 100,
      selected: false
    }
  ];

  vm_.rollDice = rollDice_;

  activate_();

  /**
   * Initial activation of Dashboard Controller.
   */
  function activate_() {

  }

  function rollDice_() {
    var min = vm_.numberOfDice;
    var max = vm_.numberOfDice * vm_.diceType;
    vm_.total = Utilities.getRandom(min, max);
  }
}]);
