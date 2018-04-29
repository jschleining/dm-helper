var app = angular.module('dmHelperApp');

app.controller('DemographicsGeneratorController', ['$scope', '$mdSidenav', 'Utilities', 'Demographics',
function ($scope, $mdSidenav, Utilities, Demographics) {
  var vm_ = this;

  //#region vars
  //#region Passed in Settings
  vm_.localSettings = vm_.config;
  //#endregion

  //#region Local Settings

  //#region Templates
  vm_.settingsTemplateBase = 'global/components/demographics-generator/settings/';
  vm_.settingsTemplates = {
    raceSettings: vm_.settingsTemplateBase + 'demographics-generator-race-settings.view.html',
    ageSettings: vm_.settingsTemplateBase + 'demographics-generator-age-settings.view.html'
  };
  vm_.settingsTemplate = '';
  //#endregion

  //#region Temporary Items for editing
  vm_.newObject = {};
  vm_.editObject = {};
  vm_.tempObject = {};
  vm_.editArray = [];
  //#endregion

  vm_.tagSelection = angular.copy(Demographics.defaultTagList);


  //#region Race Vars
  vm_.raceSelection = angular.copy(Demographics.defaultRaces);
  vm_.raceSettingMode = 'Race';
  vm_.generateSubraces = 'No';
  vm_.selectedRaces = [];
  //#endregion

  //#region Age Vars
  vm_.ageSettingsMode = 'Individual';
  vm_.ageSelection = angular.copy(Demographics.defaultAgeCategories);
  //#endregion

  //#region Racial Mix Vars

  //#endregion

  //#endregion

  //#endregion

  //#region function definitions

  vm_.updateAges = updateAges_;
  vm_.updateAge = updateAge_;

  //#region General Functions
  vm_.checkForCustomObjects = checkForCustomObjects_;
  vm_.checkForButtonDisabled = checkForButtonDisabled_;
  vm_.clearEdits = clearEdits_;
  vm_.resetConfigSettings = resetConfigSettings_;
  vm_.setEditArray = setEditArray_;
  vm_.setEditObject = setEditObject_;
  vm_.toggleSettingsSidebar = toggleSettingsSidebar_;
  //#endregion

  //#region Object Functions
  vm_.addNewObject = addNewObject_;
  vm_.createNewObject = createNewObject_;
  vm_.removeCustomObject = removeCustomObject_;
  vm_.resetNewObject = resetNewObject_;
  vm_.updateAllowedObjects = updateAllowedObjects_;
  vm_.updateCustomObject = updateCustomObject_;
  vm_.updateObjectWeight = updateObjectWeight_;
  vm_.updateRemovedWeightInArrayList = updateRemovedWeightInArrayList_;
  //#endregion

  //#region Race Functions
  vm_.addCustomRace = addCustomRace_;
  vm_.addCustomSubRace = addCustomSubRace_;
  vm_.deleteCustomRace = deleteCustomRace_;
  vm_.deleteCustomSubRace = deleteCustomSubRace_;
  vm_.getDefaultAllowedRaces = getDefaultAllowedRaces_;
  vm_.populateDefaultSelectedRaces = populateDefaultSelectedRaces_;
  vm_.resetSubraceWeight = resetSubraceWeight_;
  vm_.updateAllowedRaces = updateAllowedRaces_;
  vm_.updateCustomRace = updateCustomRace_;
  vm_.updateCustomSubrace = updateCustomSubrace_;
  //#endregion

  //#endregion

  /**
   * Initial activation of Controller.
   */
  vm_.$onInit = function() {
    vm_.resetConfigSettings();
    vm_.updateAllowedRaces();
    vm_.updateAges();
  };

  //#region General Functions
  /**
   * Check an array to see if any custom objects exist.
   *
   * @param {Array} array The array to look through.
   * @returns {Boolean} Whether or not any custom objects exist in the array.
   */
  function checkForCustomObjects_(array) {
    return Utilities.getObjectIndex(array, 'id', 'cust', 'contains') > -1;
  }

  /**
   * Check to see if a given button or button in a set should be disabled.
   *
   * @param {Array} objectArray The array of objects to be checked.
   * @param {string} property Property to be matched against.
   * @param {*} value The value to be matched against.
   * @param {object} params Object containing up to 2 parameters:
   *        matchType Whether it should look for a match or no match. 'exact', 'contains'
   *        object The object to have the toggle disabled for.
   */
  function checkForButtonDisabled_(objectArray, property, value, params) {
    var toggleDisabled = false;
    var matchingObjects = Utilities.findMatches(objectArray, property, value, params.matchType);
    var disabledItems = matchingObjects.length;
    // if there is an object, then this is disabling a specific button or switch.
    // In this case, it will return true if this is the only enabled button left in the set.
    if ((params.object && params.object.isAllowed) && disabledItems === objectArray.length - 1) {
      toggleDisabled = true;
    }
    // if there is not an object, this is disabling a save/update all button.
    if (!params.object && disabledItems > 0) {
      toggleDisabled = true;
    }
    return toggleDisabled;
  }

  /**
   * Clear out all temporary objects.
   */
  function clearEdits_() {
    vm_.editObject = {};
    vm_.tempObject = {};
    vm_.editArray = [];
  }

  /**
   * Reset Settings options that are specific to setting configs.
   */
  function resetConfigSettings_() {
    vm_.raceSettingMode = 'Race';
    vm_.resetNewObject();
    vm_.clearEdits();
  }

  /**
   * Sets a temporary object to be edited.
   *
   * @param {object} arrayToEdit Array being edited.
   */
  function setEditArray_(arrayToEdit) {
    vm_.editArray = angular.copy(arrayToEdit);
  }

  /**
   * Sets a temporary object to be edited.
   *
   * @param {object} objectToEdit Object being edited.
   */
  function setEditObject_(objectToEdit) {
    vm_.editObject = angular.copy(objectToEdit);
  }

  /**
   * Open or close the sidebar.
   */
  function toggleSettingsSidebar_(template) {
    vm_.resetConfigSettings();
    vm_.settingsTemplate = vm_.settingsTemplates[template];
    $mdSidenav('md-sidenav-right').toggle().
    then(function() {
      // do nothing.
    });
  }
  //#endregion

  //#region General Object Functions
  /**
   * Adds a new Custom Object to a list of arrays.
   *
   * @param {object} baseObject Base object to be added on to.
   * @param {object} objectParams Object containing parameters to be added to the customObject.
   * @param {Array} arrayList The list of arrays to add the customObject to.
   */
  function addNewObject_(baseObject, objectParams, arrayList) {
    var customObject = vm_.createNewObject(baseObject, objectParams);
    for (var array = 0; array < arrayList.length; array++) {
      var objectIndex = Utilities.getObjectIndex(arrayList[array], 'id', customObject.id);
      if (objectIndex === -1) {
        arrayList[array].push(customObject);
      }
    }
  }

  /**
   * Create a new Custom Object to be put into an array.
   *
   * @param {object} baseObject Base object to be added on to.
   * @param {object} params Object containing parameters to be added to the customObject.
   * @returns {customObject} The Custom Object to be returned.
   */
  function createNewObject_(baseObject, params) {
    var customObject = angular.copy(baseObject);
    angular.forEach(params, function(value, key) {
      customObject[key] = angular.copy(value);
    });
    customObject.id = Demographics.getCustomId();
    return customObject;
  }

  /**
   * Remove a custom object.
   *
   * @param {object} object The object to be deleted.
   * @param {Array} arrayList The list of arrays to remove the object from.
   */
  function removeCustomObject_(object, arrayList) {
    for (var array = 0; array < arrayList.length; array++) {
      var objectIndex = Utilities.getObjectIndex(arrayList[array], 'id', object.id);
      if (objectIndex > -1) {
        arrayList[array].splice(objectIndex, 1);
      }
    }
  }

  /**
   * Reset newObject to its default settings.
   */
  function resetNewObject_() {
    vm_.newObject = {
      isAllowed: false,
      name: '',
      type: ''
    };
  }

  /**
   * Update allowed objects in a list of arrays. This updates isAllowed in every object in each array to true or false.
   *
   * @param {Array} objectArray The array of objects that are allowed.
   * @param {Array} arrayList The list of arrays to update the isAllowed property on each object in each array.
   */
  function updateAllowedObjects_(objectArray, arrayList) {
    for (var allowedItem = 0; allowedItem < objectArray.length; allowedItem++) {
      objectArray[allowedItem].isAllowed = true;
    }
    for (var array = 0; array < arrayList.length; array++) {
      for (var arrayItem = 0; arrayItem < arrayList[array].length; arrayItem++) {
        var objectIndex = Utilities.getObjectIndex(objectArray, 'id', arrayList[array][arrayItem].id);
        if (objectIndex > -1) {
          arrayList[array][arrayItem].isAllowed = true;
        } else {
          arrayList[array][arrayItem].isAllowed = false;
        }
      }
    }
  }

  /**
   * Update a custom object.
   *
   * @param {object} object The object to be updated.
   * @param {Array} arrayList The list of arrays to update the object in.
   */
  function updateCustomObject_(object, arrayList) {
    for (var array = 0; array < arrayList.length; array++) {
      var objectIndex = Utilities.getObjectIndex(arrayList[array], 'id', object.id);
      arrayList[array][objectIndex] = object;
    }
  }

  /**
   * Update a specific weight setting in a passed in array. This update forces the total sum of weight points
   * available to be the same, no matter what it started at.
   *
   * @param {Array} array The array to loop through to update weight values.
   * @param {object} object The current object to update the weight on.
   * @param {Number} modifier The amount to modify weight by.
   * @param {string} setting Whether it is 'custom' or 'default' to update.
   * @param {Boolean} customOnly If true, do not modify any value currently at its default weight.
   */
  function updateObjectWeight_(array, object, modifier, setting, customOnly) {
    console.log('array, object, modifier, setting', array, object, modifier, setting);
    // potentially configurable way of setting the total possible weight of an array
    var maxWeight = 100;
    // get the index of the object being modified, as well as the index of the next object
    var objectIndex = Utilities.getObjectIndex(array, 'id', object.id);
    var nextIndex = (objectIndex === 0) ? array.length - 1 : objectIndex - 1;
    // if the setting being updated will be within the allowed parameters, update it.
    if (array[objectIndex].weight[setting] + modifier >= 0 && array[objectIndex].weight[setting] + modifier <= maxWeight) {
      array[objectIndex].weight[setting] += modifier;
    }
    // if defaultOnly is set, do not allow nextIndex to be an object with its default weight.
    // get the next available setting in the array that is within allowed parameters.
    while (array[nextIndex].weight[setting] - modifier < 0 ||
        array[nextIndex].weight[setting] - modifier > maxWeight ||
        array[nextIndex].isAllowed === false ||
        (array[objectIndex].isAllowed && customOnly &&
            array[nextIndex].weight.custom === array[nextIndex].weight.default)  ) {
      if (nextIndex === 0) {
        nextIndex = array.length - 1;
      } else {
        nextIndex--;
      }
    }
    // if the next available setting in the array is NOT the current setting, update it.
    if (nextIndex !== objectIndex) {
      array[nextIndex].weight[setting] -= modifier;
    }
  }

  /**
   * Update weights across all arrays the object exists in when deleted.
   *
   * @param {Array} arrayList The list of arrays to update the weight in.
   * @param {object} object The object to be deleted.
   */
  function updateRemovedWeightInArrayList_(arrayList, object) {
    for (var array = 0; array < arrayList.length; array++) {
      var objectIndex = Utilities.getObjectIndex(arrayList[array], 'id', object.id);
      arrayList[array][objectIndex].isAllowed = false;
      vm_.resetSubraceWeight(arrayList[array],arrayList[array][objectIndex]);
    }
  }
  //#endregion

  //#region Race Functions
  /**
   * Add a new race to the list of races.
   */
  function addCustomRace_() {
    var name_ = angular.copy(vm_.newObject.name);
    vm_.newObject.type = 'race';
    var params = {
      tags: [
        vm_.tagSelection.cust
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: angular.copy(vm_.ageSelection),
      percentageOfChildren: 10,
      subraces: []
    };
    var arrayList = [vm_.raceSelection];
    if (vm_.newObject.isAllowed) {
      arrayList.push(vm_.selectedRaces);
    }
    vm_.addNewObject(vm_.newObject, params, arrayList);
    vm_.resetNewObject();

    for (var array = 0; array < arrayList.length; array++) {
      var raceIndex = Utilities.getObjectIndex(arrayList[array], 'name', name_);

      // Add Default Subrace
      if (Utilities.getObjectIndex(arrayList[array][raceIndex].subraces, 'name', 'Default') < 0) {
        vm_.addCustomSubRace(arrayList[array][raceIndex], {
          defaultName: 'Default',
          tags: []
        });
      }

      // Add Revenant Subrace
      if (Utilities.getObjectIndex(arrayList[array][raceIndex].tags, 'id', vm_.tagSelection.uagh.id) < 0) {
        arrayList[array][raceIndex].tags.push(vm_.tagSelection.uagh);
      }
      if (Utilities.getObjectIndex(arrayList[array][raceIndex].subraces, 'name', 'Revenant') < 0) {
        vm_.addCustomSubRace(arrayList[array][raceIndex], {
          defaultName: 'Revenant',
          tags: [
            vm_.tagSelection.uagh
          ]
        });
      }
    }
  }

  /**
   * Add a new subrace to a race.
   *
   * @param {object} race Race to add the subrace to.
   * @param {object} params_ Extra options for adding a default subrace. Name (string), Tags (array)
   */
  function addCustomSubRace_(race, params_) {
    if (params_ && params_.defaultName) {
      vm_.newObject.name = params_.defaultName;
    }
    vm_.newObject.isAllowed = race.isAllowed;
    vm_.newObject.type = 'subrace';
    var params = {
      tags: [
        vm_.tagSelection.cust
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: angular.copy(vm_.ageSelection),
      percentOfTotalChildrenForRace: 0,
      owner: race.id
    };
    if (params_ && params_.tags && params_.tags.length > 0) {
      for (var tag = 0; tag < params_.tags.length; tag++) {
        params.tags.push(params_.tags[tag]);
      }
    }
    if (race.subraces.length === 0) {
      params.weight.default = 0;
      params.weight.custom = 100;
      params.percentOfTotalChildrenForRace = 100;
    }
    var raceSelectionIndex = Utilities.getObjectIndex(vm_.raceSelection, 'id', race.id);
    var arrayList = [
      vm_.raceSelection[raceSelectionIndex].subraces,
      race.subraces
    ];
    if (vm_.newObject.isAllowed) {
      var selectedRacesIndex = Utilities.getObjectIndex(vm_.selectedRaces, 'id', race.id);
      arrayList.push(vm_.selectedRaces[selectedRacesIndex].subraces);
    }
    vm_.addNewObject(vm_.newObject, params, arrayList);
    vm_.resetNewObject();
  }

  /**
   * Remove a Race.
   *
   * @param {object} race Race to remove.
   * @param {Boolean} clearEdits Whether to clear the temp objects or not.
   */
  function deleteCustomRace_(race, clearEdits) {
    var arrayList = [
      vm_.raceSelection,
      vm_.selectedRaces
    ];
    vm_.updateRemovedWeightInArrayList(arrayList, race);
    vm_.removeCustomObject(race, arrayList);
    if (clearEdits) {
      vm_.clearEdits();
    }
  }

  /**
   * Remove a Subrace.
   *
   * @param {object} race Race to remove the subrace from.
   * @param {object} subrace Subrace to remove.
   * @param {Boolean} clearEdits Whether to clear the temp objects or not.
   */
  function deleteCustomSubRace_(race, subrace, clearEdits) {
    var raceSelectionIndex = Utilities.getObjectIndex(vm_.raceSelection, 'id', race.id);
    var selectedRacesIndex = Utilities.getObjectIndex(vm_.selectedRaces, 'id', race.id);
    var arrayList = [
      vm_.raceSelection[raceSelectionIndex].subraces,
      vm_.selectedRaces[selectedRacesIndex].subraces,
      vm_.editObject.subraces
    ];
    vm_.updateRemovedWeightInArrayList(arrayList, subrace);
    vm_.removeCustomObject(subrace, arrayList);
    if (clearEdits) {
      vm_.clearEdits();
    }
  }

  /**
   * Get the default set of allowed races.
   *
   * @param {Array} defaultArray The array of default races.
   * @returns {Array} The default allowed object array.
   */
  function getDefaultAllowedRaces_(defaultArray) {
    var allowedRaces = [];
    for (var race = 0; race < defaultArray.length; race++) {
      if (defaultArray[race].isAllowed) {
        if (Utilities.getObjectIndex(allowedRaces, 'id', defaultArray[race].id) === -1) {
          allowedRaces.push(defaultArray[race]);
        }
      }
    }
    return allowedRaces;
  }

  /**
   * Populate the selectedRaces array
   */
  function populateDefaultSelectedRaces_(defaultArray) {
    var selectedRaces = [];
    for (var race = 0; race < defaultArray.length; race++) {
      if (defaultArray[race].isAllowed) {
        if (Utilities.getObjectIndex(selectedRaces, 'id', defaultArray[race].id) === -1) {
          selectedRaces.push(defaultArray[race]);
        }
      }
    }
    return selectedRaces;
  }

  /**
   * Reset the weight of a subrace by toggling it.
   *
   * @param {Array} objectArray The array of objects to be checked.
   * @param {object} object The object to be updated.
   */
  function resetSubraceWeight_(objectArray, object) {
    var modifier = (object.isAllowed) ? object.weight.default : object.weight.custom * -1;
    vm_.updateObjectWeight(objectArray, object, modifier, 'custom', true);
  }

  /**
   * Get the default set of allowed races.
   *
   * @param {Array} defaultArray The array of default races.
   */
  function updateAllowedRaces_(objectArray) {
    if (!objectArray) {
      var defaultArray = angular.copy(Demographics.defaultRaces);
      objectArray = vm_.getDefaultAllowedRaces(defaultArray);
      vm_.selectedRaces = vm_.populateDefaultSelectedRaces(objectArray);
    }
    var arrayList = [
      vm_.raceSelection,
      vm_.selectedRaces
    ];
    vm_.updateAllowedObjects(objectArray, arrayList);
  }

  /**
   * Update a Race.
   *
   * @param {object} race Race to update.
   * @param {Boolean} clearEdits Whether to clear the temp objects or not.
   */
  function updateCustomRace_(race, clearEdits) {
    var arrayList = [
      vm_.raceSelection
    ];
    if (race.isAllowed) {
      arrayList.push(vm_.selectedRaces);
    }
    vm_.updateCustomObject(race, arrayList);
    if (clearEdits) {
      vm_.clearEdits();
    }
  }

  /**
   * Update a Subrace.
   *
   * @param {object} race Race to update.
   * @param {object} subrace Subrace to update.
   * @param {Boolean} clearEdits Whether to clear the temp objects or not.
   */
  function updateCustomSubrace_(race, subrace, clearEdits) {
    var raceSelectionIndex = Utilities.getObjectIndex(vm_.raceSelection, 'id', race.id);
    var arrayList = [
      vm_.raceSelection[raceSelectionIndex].subraces,
      vm_.editObject.subraces
    ];
    if (race.isAllowed) {
      var selectedRacesIndex = Utilities.getObjectIndex(vm_.selectedRaces, 'id', race.id);
      arrayList.push(vm_.selectedRaces[selectedRacesIndex].subraces);
    }
    vm_.updateCustomObject(subrace, arrayList);
    if (clearEdits) {
      vm_.clearEdits();
    }
  }
  //#endregion

  //#region Age Functions

  vm_.updateAgeConfigs = updateAgeConfigs_;
  function updateAgeConfigs_(settingsMode) {
    if (settingsMode === 'Global') {
      vm_.editArray = vm_.setEditArray(vm_.ageSelection);
    } else {
      vm_.clearEdits();
    }
  }

  /**
   * Populate all races with the age selection default.
   */
  function updateAges_() {
    for (var race = 0; race < vm_.raceSelection.length; race++) {
      vm_.raceSelection[race].ageCategories = angular.copy(vm_.ageSelection);
    }
  }

  /**
   * Update a specific age setting in a passed in age categories array. This is by reference, so it will affect the
   * race that owns it. This update forces the total sum of points available to be the same, no matter what it
   * started at.
   */
  function updateAge_(ageCategories, index, modifier) {
    // get the index of the next age setting in the list.
    var nextIndex = (index === ageCategories.length - 1) ? 0 : index + 1;
    // if the setting being updated will be within the allowed parameters, update it.
    if (ageCategories[index].weight + modifier >= 0 && ageCategories[index].weight + modifier <= 100) {
      ageCategories[index].weight += modifier;
    }
    // get the next available setting in the array that is within allowed parameters.
    while (ageCategories[nextIndex].weight - modifier < 0 || ageCategories[nextIndex].weight - modifier > 100) {
      if (nextIndex === ageCategories.length - 1) {
        nextIndex = 0;
      } else {
        nextIndex++;
      }
    }
    // if the next available setting in the array is NOT the current setting, update it.
    if (nextIndex !== index) {
      ageCategories[nextIndex].weight -= modifier;
    }
  }


  //#endregion

}]);
