var app = angular.module('dmHelperApp');

app.service('Utilities', function () {
  var vm_ = this;
  vm_.getRandom = getRandom_;

  // Return an inclusive random number between two integers.
  function getRandom_(min, max)
  {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
});
