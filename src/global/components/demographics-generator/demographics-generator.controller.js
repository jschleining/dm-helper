var app = angular.module('dmHelperApp');

app.controller('DemographicsGeneratorController', ['$scope', '$mdSidenav', 'Utilities', 'Demographics',
    function ($scope, $mdSidenav, Utilities, Demographics) {
  var vm_ = this;

  //#region vars
  //#region Passed in Settings
  vm_.localSettings = vm_.config;
  //#endregion

  //#region Local Settings
  vm_.settingsTemplate = '';
  //#region Race Vars
  vm_.raceSelection = angular.copy(Demographics.defaultRaces);
  vm_.selectedRaces = [];
  vm_.customRace = {
    name: '',
    isAllowed: false,
    percentageOfChildren: 10
  };
  //#endregion
  //#region Age Vars
  vm_.ageSelection = angular.copy(Demographics.defaultAgeCategories);
  //#endregion
  //#endregion
  //#endregion

  //#region function definitions
  vm_.addCustomRace = addCustomRace_;
  vm_.updateSelectedRaces = updateSelectedRaces_;
  vm_.toggleSettingsSidebar = toggleSettingsSidebar_;
  vm_.updateAges = updateAges_;
  vm_.updateAge = updateAge_;
  //#endregion

  /**
   * Initial activation of Controller.
   */
  vm_.$onInit = function() {
    vm_.updateSelectedRaces();
    vm_.updateAges();
  };

  //#region Race Functions
  /**
   * Add a new race to the list of races.
   */
  function addCustomRace_() {
    vm_.customRace.ageCategories = angular.copy(vm_.ageSelection);
    vm_.raceSelection.push(vm_.customRace);
    vm_.customRace = {
      name: '',
      isAllowed: false,
      percentageOfChildren: 10,
      ageCategories: angular.copy(vm_.ageSelection)
    };
    vm_.updateSelectedRaces();
  }

  /**
   * Refresh the list of selected races.
   */
  function updateSelectedRaces_() {
    for (var race = 0; race < vm_.raceSelection.length; race++) {
      if (vm_.raceSelection[race].isAllowed) {
        if (Utilities.getObjectIndex(vm_.selectedRaces, 'name', vm_.raceSelection[race].name) === -1) {
          vm_.selectedRaces.push(vm_.raceSelection[race]);
        }
      }
    }
    console.log(vm_.selectedRaces);
  }
  //#endregion

  /**
   * Initial activation of Controller.
   */
  function updateAges_() {
    for (var race = 0; race < vm_.raceSelection.length; race++) {
      vm_.raceSelection[race].ageCategories = angular.copy(vm_.ageSelection);
    }
  }

  function updateAge_(ageCategories, index, modifier) {
    var nextIndex = (index === ageCategories.length - 1) ? 0 : index + 1;

    if (ageCategories[index].weight + modifier >= 0 && ageCategories[index].weight + modifier <= 100) {
      ageCategories[index].weight += modifier;
    }
    while (ageCategories[nextIndex].weight - modifier < 0 || ageCategories[nextIndex].weight - modifier > 100) {
      if (nextIndex === ageCategories.length - 1) {
        nextIndex = 0;
      } else {
        nextIndex++;
      }
    }
    if (nextIndex !== index) {
      ageCategories[nextIndex].weight -= modifier;
    }
  }

  /**
   * Open or close the sidebar.
   */
  function toggleSettingsSidebar_(template) {
    vm_.settingsTemplate = template;
    $mdSidenav('md-sidenav-right').toggle().
    then(function() {
      // do nothing.
      //angular.element('#workspace')[0].scrollTop = 0;
    });
  }

}]);
