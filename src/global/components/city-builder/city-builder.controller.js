var app = angular.module('dmHelperApp');

app.controller('CityBuilderController', ['Utilities', function (Utilities) {
  var vm_ = this;

  //#region vars
  // Passed in Settings
  vm_.localSettings = vm_.config;
  // local settings
  vm_.settlementSelection = [
    {
      weight: 10,
      size: 'Thorp',
      populationRange: {
        min: 20,
        max: 80
      },
      gpLimit: 40,
      powerCenterQuantity: 1,
      powerCenterModifier: -5
    },
    {
      weight: 20,
      size: 'Hamlet',
      populationRange: {
        min: 81,
        max: 400
      },
      gpLimit: 100,
      powerCenterQuantity: 1,
      powerCenterModifier: 0
    },
    {
      weight: 20,
      size: 'Village',
      populationRange: {
        min: 401,
        max: 900
      },
      gpLimit: 200,
      powerCenterQuantity: 1,
      powerCenterModifier: 5
    },
    {
      weight: 20,
      size: 'Small Town',
      populationRange: {
        min: 901,
        max: 2000
      },
      gpLimit: 800,
      powerCenterQuantity: 1,
      powerCenterModifier: 10
    },
    {
      weight: 15,
      size: 'Large Town',
      populationRange: {
        min: 2001,
        max: 5000
      },
      gpLimit: 3000,
      powerCenterQuantity: 1,
      powerCenterModifier: 15
    },
    {
      weight: 10,
      size: 'Small City',
      populationRange: {
        min: 5001,
        max: 12000
      },
      gpLimit: 15000,
      powerCenterQuantity: 2,
      powerCenterModifier: 20
    },
    {
      weight: 4,
      size: 'Large City',
      populationRange: {
        min: 12001,
        max: 25000
      },
      gpLimit: 40000,
      powerCenterQuantity: 3,
      powerCenterModifier: 25
    },
    {
      weight: 1,
      size: 'Metropolis',
      populationRange: {
        min: 25001,
        max: 60000
      },
      gpLimit: 100000,
      powerCenterQuantity: 4,
      powerCenterModifier: 30
    }
  ];
  vm_.powerCenterSelection = [
    {
      weight: 65,
      type: 'Conventional',
      chanceForExtraMonstrous: 5
    },
    {
      weight: 30,
      type: 'Nonstandard',
      chanceForExtraMonstrous: 0
    },
    {
      weight: 5,
      type: 'Magical',
      chanceForExtraMonstrous: 0
    }
  ];
  vm_.powerCenterAlignmentSelection = [
    {
      weight: 35,
      alignment: 'Lawful Good',
      monstrous: [
        {
          type: 'Celestial',
          weight: 25
        },
        {
          type: 'Dragon',
          weight: 60
        },
        {
          type: 'Ghost',
          weight: 15
        }
      ]
    },
    {
      weight: 4,
      alignment: 'Neutral Good',
      monstrous: [
        {
          type: 'Dragon',
          weight: 20
        },
        {
          type: 'Fey',
          weight: 25
        },
        {
          type: 'Giant',
          weight: 20
        },
        {
          type: 'Werebear',
          weight: 10
        },
        {
          type: 'Centaur',
          weight: 10
        },
        {
          type: 'Ghost',
          weight: 15
        }
      ]
    },
    {
      weight: 2,
      alignment: 'Chaotic Good',
      monstrous: [
        {
          type: 'Celestial',
          weight: 20
        },
        {
          type: 'Dragon',
          weight: 40
        },
        {
          type: 'Elemental',
          weight: 10
        },
        {
          type: 'Giant',
          weight: 10
        },
        {
          type: 'Treant',
          weight: 5
        },
        {
          type: 'Ghost',
          weight: 15
        }
      ]
    },
    {
      weight: 20,
      alignment: 'Lawful Neutral',
      monstrous: [
        {
          type: 'Sphinx',
          weight: 50
        },
        {
          type: 'Myconid',
          weight: 30
        },
        {
          type: 'Ghost',
          weight: 20
        }
      ]
    },
    {
      weight: 2,
      alignment: 'True Neutral',
      monstrous: [
        {
          type: 'Aberration',
          weight: 5
        },
        {
          type: 'Dragon',
          weight: 10
        },
        {
          type: 'Elemental',
          weight: 5
        },
        {
          type: 'Fey',
          weight: 10
        },
        {
          type: 'Giant',
          weight: 10
        },
        {
          type: 'Merfolk',
          weight: 10
        },
        {
          type: 'Lizardfolk',
          weight: 15
        },
        {
          type: 'Weretiger',
          weight: 5
        },
        {
          type: 'Doppleganger',
          weight: 10
        },
        {
          type: 'Plant',
          weight: 5
        },
        {
          type: 'Ghost',
          weight: 15
        }
      ]
    },
    {
      weight: 1,
      alignment: 'Chaotic Neutral',
      monstrous: [
        {
          type: 'Slaad',
          weight: 10
        },
        {
          type: 'Fey',
          weight: 50
        },
        {
          type: 'Giant',
          weight: 10
        },
        {
          type: 'Kenku',
          weight: 10
        },
        {
          type: 'Thri-Kreen',
          weight: 5
        },
        {
          type: 'Ghost',
          weight: 15
        }
      ]
    },
    {
      weight: 26,
      alignment: 'Lawful Evil',
      monstrous: [
        {
          type: 'Aberration',
          weight: 5
        },
        {
          type: 'Dragon',
          weight: 10
        },
        {
          type: 'Elemental',
          weight: 5
        },
        {
          type: 'Fiend',
          weight: 5
        },
        {
          type: 'Giant',
          weight: 5
        },
        {
          type: 'Kobold',
          weight: 10
        },
        {
          type: 'Goblinoid',
          weight: 10
        },
        {
          type: 'Sahuagin',
          weight: 5
        },
        {
          type: 'Wererat',
          weight: 5
        },
        {
          type: 'Medusa',
          weight: 5
        },
        {
          type: 'Vampire',
          weight: 10
        },
        {
          type: 'Mummy Lord',
          weight: 5
        },
        {
          type: 'Lich',
          weight: 5
        },
        {
          type: 'DeathTyrant',
          weight: 5
        },
        {
          type: 'Ghost',
          weight: 10
        }
      ]
    },
    {
      weight: 8,
      alignment: 'Neutral Evil',
      monstrous: [
        {
          type: 'Aberration',
          weight: 10
        },
        {
          type: 'Fey',
          weight: 10
        },
        {
          type: 'Fiend',
          weight: 5
        },
        {
          type: 'Giant',
          weight: 10
        },
        {
          type: 'Drow',
          weight: 10
        },
        {
          type: 'Goblinoid',
          weight: 15
        },
        {
          type: 'Yuan-Ti',
          weight: 5
        },
        {
          type: 'Wereboar',
          weight: 5
        },
        {
          type: 'Plant',
          weight: 10
        },
        {
          type: 'Wight',
          weight: 5
        },
        {
          type: 'Lich',
          weight: 5
        },
        {
          type: 'Ghost',
          weight: 10
        }
      ]
    },
    {
      weight: 2,
      alignment: 'Chaotic Evil',
      monstrous: [
        {
          type: 'Aberration',
          weight: 5
        },
        {
          type: 'Dragon',
          weight: 5
        },
        {
          type: 'Fey',
          weight: 5
        },
        {
          type: 'Fiend',
          weight: 5
        },
        {
          type: 'Giant',
          weight: 5
        },
        {
          type: 'Gnoll',
          weight: 5
        },
        {
          type: 'Orc',
          weight: 10
        },
        {
          type: 'Goblinoid',
          weight: 10
        },
        {
          type: 'Werewolf',
          weight: 5
        },
        {
          type: 'Lizardfolk',
          weight: 5
        },
        {
          type: 'Harpy',
          weight: 5
        },
        {
          type: 'Minotaur',
          weight: 5
        },
        {
          type: 'Lamia',
          weight: 5
        },
        {
          type: 'Drider',
          weight: 5
        },
        {
          type: 'Banshee',
          weight: 5
        },
        {
          type: 'Death Knight',
          weight: 5
        },
        {
          type: 'Lich',
          weight: 5
        },
        {
          type: 'Ghost',
          weight: 5
        }
      ]
    }
  ];
  vm_.authorityFigureSelection = [
    {
      weight: 60,
      officeHolder: 'Highest Level Warrior'
    },
    {
      weight: 20,
      officeHolder: 'Second Highest Level Fighter'
    },
    {
      weight: 20,
      officeHolder: 'Highest Level Fighter'
    }
  ];

  //TODO: Add Index to mix and account for other, or at least force other to be last
  vm_.racialMixSelection = [
    {
      weight: 5,
      type: 'Exclusive',
      mix: [
        {
          name: 'Human',
          percentage: 100
        }
      ]
    },
    {
      weight: 25,
      type: 'Isolated',
      mix: [
        {
          name: 'Human',
          percentage: 96
        },
        {
          name: 'Halfling',
          percentage: 2
        },
        {
          name: 'Elf',
          percentage: 1
        },
        {
          name: 'Other',
          percentage: 1
        }
      ]
    },
    {
      weight: 60,
      type: 'Mixed',
      mix: [
        {
          name: 'Human',
          percentage: 79
        },
        {
          name: 'Halfling',
          percentage: 9
        },
        {
          name: 'Elf',
          percentage: 5
        },
        {
          name: 'Dwarf',
          percentage: 3
        },
        {
          name: 'Gnome',
          percentage: 2
        },
        {
          name: 'Half Elf',
          percentage: 1
        },
        {
          name: 'Half Orc',
          percentage: 1
        }
      ]
    },
    {
      weight: 10,
      type: 'Integrated',
      mix: [
        {
          name: 'Human',
          percentage: 37
        },
        {
          name: 'Halfling',
          percentage: 20
        },
        {
          name: 'Elf',
          percentage: 18
        },
        {
          name: 'Dwarf',
          percentage: 10
        },
        {
          name: 'Gnome',
          percentage: 7
        },
        {
          name: 'Half Elf',
          percentage: 5
        },
        {
          name: 'Half Orc',
          percentage: 3
        }
      ]
    }
  ];
  vm_.raceSelection = [
    {
      name: 'Human',
      favoredClass: '',
      ageCategories: [
        {
          age: 'Adult',
          weight: 50
        },
        {
          age: 'Middle Age',
          weight: 35
        },
        {
          age: 'Old',
          weight: 13
        },
        {
          age: 'Venerable',
          weight: 2
        }
      ],
      percentageOfChildren: 40
    },
    {
      name: 'Halfling',
      favoredClass: 'Rogue',
      ageCategories: [
        {
          age: 'Adult',
          weight: 45
        },
        {
          age: 'Middle Age',
          weight: 35
        },
        {
          age: 'Old',
          weight: 17
        },
        {
          age: 'Venerable',
          weight: 3
        }
      ],
      percentageOfChildren: 30
    },
    {
      name: 'Elf',
      favoredClass: 'Wizard',
      ageCategories: [
        {
          age: 'Adult',
          weight: 40
        },
        {
          age: 'Middle Age',
          weight: 35
        },
        {
          age: 'Old',
          weight: 19
        },
        {
          age: 'Venerable',
          weight: 6
        }
      ],
      percentageOfChildren: 20
    },
    {
      name: 'Dwarf',
      favoredClass: 'Fighter',
      ageCategories: [
        {
          age: 'Adult',
          weight: 40
        },
        {
          age: 'Middle Age',
          weight: 35
        },
        {
          age: 'Old',
          weight: 19
        },
        {
          age: 'Venerable',
          weight: 6
        }
      ],
      percentageOfChildren: 10
    },
    {
      name: 'Gnome',
      favoredClass: 'Wizard',
      ageCategories: [
        {
          age: 'Adult',
          weight: 45
        },
        {
          age: 'Middle Age',
          weight: 35
        },
        {
          age: 'Old',
          weight: 17
        },
        {
          age: 'Venerable',
          weight: 3
        }
      ],
      percentageOfChildren: 10
    },
    {
      name: 'Half Elf',
      favoredClass: 'Bard',
      ageCategories: [
        {
          age: 'Adult',
          weight: 47
        },
        {
          age: 'Middle Age',
          weight: 38
        },
        {
          age: 'Old',
          weight: 11
        },
        {
          age: 'Venerable',
          weight: 4
        }
      ],
      percentageOfChildren: 5
    },
    {
      name: 'Half Orc',
      favoredClass: 'Barbarian',
      ageCategories: [
        {
          age: 'Adult',
          weight: 55
        },
        {
          age: 'Middle Age',
          weight: 34
        },
        {
          age: 'Old',
          weight: 10
        },
        {
          age: 'Venerable',
          weight: 1
        }
      ],
      percentageOfChildren: 5
    }
  ];

  vm_.settlement = {};
  vm_.selectedMix = 'Mixed';
  vm_.selectedSize = 'Hamlet';
  //#endregion

  //#region function definitions
  vm_.updateComponent = updateComponent_;
  vm_.updateSettlement = updateSettlement_;
  vm_.getPopulation = getPopulation_;
  vm_.getPowerCenters = getPowerCenters_;
  vm_.getReadyCash = getReadyCash_;
  vm_.getMilitary = getMilitary_;
  vm_.getMilitia = getMilitia_;
  vm_.getRacialMix = getRacialMix_;
  vm_.getAgeDemographics = getAgeDemographics_;
  vm_.updateWeightedRangeValues = updateWeightedRangeValues_;
  //#endregion

  /**
   * Initial activation of Controller.
   */
  vm_.$onInit = function() {
    vm_.updateSettlement();
  };

  /**
   * Set defaults and update.
   */
  function updateSettlement_() {
    var settlementIndex = Utilities.getObjectIndex(vm_.settlementSelection, 'size', vm_.selectedSize);
    vm_.settlement = vm_.settlementSelection[settlementIndex];
    vm_.updateWeightedRangeValues();
    vm_.updateComponent();
  }

  /**
   * Get the newest range values for each array that needs it.
   */
  function updateWeightedRangeValues_() {
    vm_.settlementSelection = Utilities.generateValueRanges(vm_.settlementSelection);
    vm_.powerCenterSelection = Utilities.generateValueRanges(vm_.powerCenterSelection);
    vm_.powerCenterAlignmentSelection = Utilities.generateValueRanges(vm_.powerCenterAlignmentSelection);
    vm_.authorityFigureSelection = Utilities.generateValueRanges(vm_.authorityFigureSelection);
    vm_.racialMixSelection = Utilities.generateValueRanges(vm_.racialMixSelection);

    for (var race = 0; race < vm_.raceSelection.length; race++) {
      vm_.raceSelection[race].ageCategories = Utilities.generateValueRanges(vm_.raceSelection[race].ageCategories);
    }

    for (var alignment = 0; alignment < vm_.powerCenterAlignmentSelection.length; alignment++) {
      vm_.powerCenterAlignmentSelection[alignment].monstrous = Utilities.generateValueRanges(vm_.powerCenterAlignmentSelection[alignment].monstrous);
    }
  }

  /**
   * Update the settlement object with the newest values based on inputs and configurations.
   */
  function updateComponent_() {
    var size = {
      min: vm_.settlement.populationRange.min,
      max: vm_.settlement.populationRange.max
    };

    vm_.settlement.population = vm_.getPopulation(size.min, size.max);
    vm_.settlement.readyCash = vm_.getReadyCash(vm_.settlement.gpLimit, vm_.settlement.population);
    vm_.settlement.powerCenters = vm_.getPowerCenters(vm_.settlement.powerCenterQuantity);
    vm_.settlement.military = vm_.getMilitary(vm_.settlement.population);
    vm_.settlement.militia = vm_.getMilitia(vm_.settlement.population);
    vm_.settlement.racialDemographics = vm_.getRacialMix(vm_.selectedMix, vm_.settlement.population);
    vm_.settlement.racialDemographics = vm_.getAgeDemographics(vm_.settlement.racialDemographics);
    console.log(vm_.settlement);
  }

  /**
   * Get the population of the settlement.
   *
   * @param {Number} min Minimum value.
   * @param {Number} max Maximum value.
   */
  function getPopulation_(min, max) {
    return Utilities.getRandom(min, max);
  }

  /**
   * Get the power centers of the settlement.
   *
   * @param {Number} quantity Number of power centers to generate.
   */
  function getPowerCenters_(quantity) {
    var powerCenters = [];
    for (var current = 0; current < quantity; current++) {
      var powerCenter = Utilities.getItemFromWeightedObjectArray(vm_.powerCenterSelection, vm_.settlement.powerCenterModifier);
      var alignment = Utilities.getItemFromWeightedObjectArray(vm_.powerCenterAlignmentSelection);
      //TODO: Refactor to have an internal array to determine more specific
      //TODO:    power center information. i.e. Nonstandard/Guild, Nonstandard/Adventurers, etc.
      powerCenters.push({
        type: powerCenter.type,
        alignment: alignment.alignment
      });
      if (Utilities.getRandom(1, 100) <= powerCenter.chanceForExtraMonstrous) {
        var customAlignmentSelection = angular.copy(vm_.powerCenterAlignmentSelection);
        for (var align = 0; align < customAlignmentSelection.length; align++) {
          align.weight = (align.alignment === 'True Neutral') ? 12 : 11;
        }
        var monsterAlignment = Utilities.getItemFromWeightedObjectArray(customAlignmentSelection);
        var monsterType = Utilities.getItemFromWeightedObjectArray(monsterAlignment.monstrous);
        powerCenters.push({
          type: 'Monstrous: ' + monsterType.type,
          alignment: monsterAlignment.alignment
        });
      }
    }
    return powerCenters;
  }

  /**
   * Get the ready cash or cash equivalent of the settlement.
   *
   * @param {Number} gpLimit Most expensive item available.
   * @param {Number} population Total population of the settlement.
   */
  function getReadyCash_(gpLimit, population) {
    return (Math.floor(gpLimit / 2) * Math.floor(population / 10));
  }

  /**
   * Get the total number of full time guards or soldiers in the settlement.
   *
   * @param {Number} population Total population of the settlement.
   */
  function getMilitary_(population) {
    return Math.floor(population / 100);
  }

  /**
   * Get the total number of militia members that can be raised in the settlement.
   *
   * @param {Number} population Total population of the settlement.
   */
  function getMilitia_(population) {
    return Math.floor(population / 20);
  }

  function getRacialMix_(mix, population) {
    var mixIndex = Utilities.getObjectIndex(vm_.racialMixSelection, 'type', mix);
    var remaining = population;
    var calculatedDemographics = [];
    // ensure minimum of one member of every available race by starting with the smallest percentage
    vm_.racialMixSelection[mixIndex].mix = _.sortBy(vm_.racialMixSelection[mixIndex].mix, 'percentage').reverse();
    for (var race = 0; race < vm_.racialMixSelection[mixIndex].mix.length; race++) {
      var percentage = vm_.racialMixSelection[mixIndex].mix[race].percentage / 100;
      // ensure minimum of 1
      var pop = (Math.floor(population * percentage) > 0) ? Math.floor(population * percentage) : 1;
      remaining -= pop;
      calculatedDemographics.push({
        name: vm_.racialMixSelection[mixIndex].mix[race].name,
        percentageDefault: vm_.racialMixSelection[mixIndex].mix[race].percentage,
        actualPercentage: ((pop / population) * 100).toFixed(2),
        population: pop
      });
    }
    calculatedDemographics = _.sortBy(calculatedDemographics, 'percentageDefault').reverse();
    if (remaining > 0) {
      calculatedDemographics[0].population += remaining;
    }
    return calculatedDemographics;
  }

  function getAgeDemographics_(racialDemographics) {
    var ageDemographics = racialDemographics;

    // TODO: Update to account for 'Other'
    for (var race = 0; race < ageDemographics.length; race++) {
      // get the index of the current race from the races list
      var raceIndex = Utilities.getObjectIndex(vm_.raceSelection, 'name', ageDemographics[race].name);
      // add the number of children
      ageDemographics[race].ageCategories = [{
        age: 'Children',
        population: Math.floor(ageDemographics[race].population * (vm_.raceSelection[raceIndex].percentageOfChildren / 100))
      }];
      // populate the age categories with defaults
      for (var age = 0; age < vm_.raceSelection[raceIndex].ageCategories.length; age++) {
        ageDemographics[race].ageCategories.push({
          age: vm_.raceSelection[raceIndex].ageCategories[age].age,
          population: 0,
          percentage: 0
        });
      }
      // loop through each person of this race, randomly determine their age, and add them to the appropriate object
      for (var person = 0; person < ageDemographics[race].population; person++) {
        var age = Utilities.getItemFromWeightedObjectArray(vm_.raceSelection[raceIndex].ageCategories);
        var ageIndex = Utilities.getObjectIndex(ageDemographics[race].ageCategories, 'age', age.age);
        ageDemographics[race].ageCategories[ageIndex].population++;
        ageDemographics[race].ageCategories[ageIndex].percentage = ((ageDemographics[race].ageCategories[ageIndex].population / ageDemographics[race].population) * 100).toFixed(2);
      }
    }

    return ageDemographics;
  }


}]);
