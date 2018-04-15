var app = angular.module('dmHelperApp');

app.controller('CityBuilderController', ['Utilities', function (Utilities) {
  var vm_ = this;

  //#region vars
  // Passed in Settings
  vm_.localSettings = vm_.config;
  // local settings
  vm_.settlementSizes = [
    {
      weight: 10, // 1-10
      size: 'Thorp',
      populationRange: {
        min: 20,
        max: 80
      },
      gpLimit: 40,
      powerCenters: 1,
      sizeModifier: -1
    },
    {
      weight: 20, // 11-30
      size: 'Hamlet',
      populationRange: {
        min: 81,
        max: 400
      },
      gpLimit: 100,
      powerCenters: 1,
      sizeModifier: 0
    },
    {
      weight: 20, // 31-50
      size: 'Village',
      populationRange: {
        min: 401,
        max: 900
      },
      gpLimit: 200,
      powerCenters: 1,
      sizeModifier: 1
    },
    {
      weight: 20, // 51-70
      size: 'Small Town',
      populationRange: {
        min: 901,
        max: 2000
      },
      gpLimit: 800,
      powerCenters: 1,
      sizeModifier: 2
    },
    {
      weight: 15, // 71-85
      size: 'Large Town',
      populationRange: {
        min: 2001,
        max: 5000
      },
      gpLimit: 3000,
      powerCenters: 1,
      sizeModifier: 3
    },
    {
      weight: 10, // 86-95
      size: 'Small City',
      populationRange: {
        min: 5001,
        max: 12000
      },
      gpLimit: 15000,
      powerCenters: 2,
      sizeModifier: 4
    },
    {
      weight: 4, // 96-99
      size: 'Large City',
      populationRange: {
        min: 12001,
        max: 25000
      },
      gpLimit: 40000,
      powerCenters: 3,
      sizeModifier: 5
    },
    {
      weight: 1, // 100
      size: 'Metropolis',
      populationRange: {
        min: 25001,
        max: 60000
      },
      gpLimit: 100000,
      powerCenters: 4,
      sizeModifier: 6
    }
  ];
  vm_.selectedSize = 'Hamlet';
  vm_.settlement = {};
  vm_.powerCenterTypes = [
    {
      weight: 65, // 1-65
      type: 'Conventional',
      chanceForExtraMonstrous: 5
    },
    {
      weight: 30, // 66-95
      type: 'Nonstandard',
      chanceForExtraMonstrous: 0
    },
    {
      weight: 5, // 96-100
      type: 'Magical',
      chanceForExtraMonstrous: 0
    }
  ];
  vm_.powerCenterAlignments = [
    {
      weight: 35, // 1-35
      alignment: 'Lawful Good'
    },
    {
      weight: 4, // 36-39
      alignment: 'Neutral Good'
    },
    {
      weight: 2, // 40-41
      alignment: 'Chaotic Good'
    },
    {
      weight: 20, // 42-61
      alignment: 'Lawful Neutral'
    },
    {
      weight: 2, // 62-63
      alignment: 'True Neutral'
    },
    {
      weight: 1, // 64
      alignment: 'Chaotic Neutral'
    },
    {
      weight: 26, // 65-90
      alignment: 'Lawful Evil'
    },
    {
      weight: 8, // 91-98
      alignment: 'Neutral Evil'
    },
    {
      weight: 2, // 99-100
      alignment: 'Chaotic Evil'
    }
  ];
  vm_.authorityFigure = [
    {
      weight: 60, // 1-60
      officeHolder: 'Highest Level Warrior'
    },
    {
      weight: 20, // 61-80
      officeHolder: 'Second Highest Level Fighter'
    },
    {
      weight: 20, // 81-100
      officeHolder: 'Highest Level Fighter'
    }
  ];
  vm_.racialMixes = [
    {
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
  vm_.selectedMix = 'Mixed';
  vm_.races = [
    {
      name: 'Human',
      favoredClass: ''
    },
    {
      name: 'Halfling',
      favoredClass: 'Rogue'
    },
    {
      name: 'Elf',
      favoredClass: 'Wizard'
    },
    {
      name: 'Dwarf',
      favoredClass: 'Fighter'
    },
    {
      name: 'Gnome',
      favoredClass: 'Wizard'
    },
    {
      name: 'Half Elf',
      favoredClass: 'Bard'
    },
    {
      name: 'Half Orc',
      favoredClass: 'Barbarian'
    }
  ];
  //#endregion

  //#region function definitions
  vm_.updateComponent = updateComponent_;
  vm_.updateSettlement = updateSettlement_;
  vm_.getPopulation = getPopulation_;
  vm_.getReadyCash = getReadyCash_;
  vm_.getMilitary = getMilitary_;
  vm_.getMilitia = getMilitia_;
  vm_.getRacialMix = getRacialMix_;
  //#endregion

  /**
   * Initial activation of Controller.
   */
  vm_.$onInit = function() {
    vm_.updateSettlement();
  };

  function updateSettlement_() {
    var settlementIndex = Utilities.getObjectIndex(vm_.settlementSizes, 'size', vm_.selectedSize);
    vm_.settlement = vm_.settlementSizes[settlementIndex];
    vm_.updateComponent();
  }

  function updateComponent_() {
    var size = {
      min: vm_.settlement.populationRange.min,
      max: vm_.settlement.populationRange.max
    };
    vm_.settlement.population = vm_.getPopulation(size.min, size.max);
    vm_.settlement.readyCash = vm_.getReadyCash(vm_.settlement.gpLimit, vm_.settlement.population);
    vm_.settlement.military = vm_.getMilitary(vm_.settlement.population);
    vm_.settlement.militia = vm_.getMilitia(vm_.settlement.population);
    vm_.settlement.racialDemographics = vm_.getRacialMix(vm_.selectedMix, vm_.settlement.population);
  }

  function getPopulation_(min, max) {
    return Utilities.getRandom(min, max);
  }

  function getReadyCash_(gpLimit, population) {
    return (Math.floor(gpLimit / 2) * Math.floor(population / 10));
  }

  function getMilitary_(population) {
    return Math.floor(population / 100);
  }

  function getMilitia_(population) {
    return Math.floor(population / 20);
  }

  function getRacialMix_(mix, population) {
    var mixIndex = Utilities.getObjectIndex(vm_.racialMixes, 'type', mix);
    var remaining = population;
    var calculatedDemographics = [];

    console.log('vm_.racialMixes[mixIndex]', vm_.racialMixes[mixIndex]);
    for(var race = 0; race < vm_.racialMixes[mixIndex].mix.length; race++) {
      var pop = Math.floor(population * (vm_.racialMixes[mixIndex].mix[race].percentage / 100));
      remaining -= pop;
      calculatedDemographics.push({
        name: vm_.racialMixes[mixIndex].mix[race].name,
        population: pop
      });
    }

    if (remaining > 0) {
      calculatedDemographics[0].population += remaining;
    }

    return calculatedDemographics;
  }
}]);
