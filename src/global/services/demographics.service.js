var app = angular.module('dmHelperApp');

app.service('Demographics', function () {
  var service_ = this;

  // weighted age categories should add up to 100. Then they can be used as a percentage OR weighted random value.
  service_.defaultAgeCategories = [
    {
      name: 'Adult',
      order: 1,
      weight: 50
    },
    {
      name: 'Middle Age',
      order: 2,
      weight: 35
    },
    {
      name: 'Old',
      order: 3,
      weight: 13
    },
    {
      name: 'Venerable',
      order: 4,
      weight: 2
    }
  ];
  service_.defaultRaces = [
    {
      name: 'Aarakocra',
      isAllowed: false,
      percentageOfChildren: 10
    },
    {
      name: 'Aasimar',
      isAllowed: false,
      percentageOfChildren: 5
    },
    {
      name: 'Bugbear',
      isAllowed: false,
      percentageOfChildren: 30
    },
    {
      name: 'Dragonborn',
      isAllowed: false,
      percentageOfChildren: 10
    },
    {
      name: 'Dwarf',
      isAllowed: true,
      percentageOfChildren: 10
    },
    {
      name: 'Elf',
      isAllowed: true,
      percentageOfChildren: 20
    },
    {
      name: 'Firbolg',
      isAllowed: false,
      percentageOfChildren: 20
    },
    {
      name: 'Genasi',
      isAllowed: false,
      percentageOfChildren: 10
    },
    {
      name: 'Gnome',
      isAllowed: true,
      percentageOfChildren: 10
    },
    {
      name: 'Goblin',
      isAllowed: false,
      percentageOfChildren: 40
    },
    {
      name: 'Goliath',
      isAllowed: false,
      percentageOfChildren: 10
    },
    {
      name: 'Half Elf',
      isAllowed: true,
      percentageOfChildren: 5
    },
    {
      name: 'Half Orc',
      isAllowed: true,
      percentageOfChildren: 5
    },
    {
      name: 'Halfling',
      isAllowed: true,
      percentageOfChildren: 30
    },
    {
      name: 'Hobgoblin',
      isAllowed: false,
      percentageOfChildren: 30
    },
    {
      name: 'Human',
      isAllowed: true,
      percentageOfChildren: 40
    },
    {
      name: 'Kenku',
      isAllowed: false,
      percentageOfChildren: 10
    },
    {
      name: 'Kobold',
      isAllowed: false,
      percentageOfChildren: 40
    },
    {
      name: 'Lizardfolk',
      isAllowed: false,
      percentageOfChildren: 30
    },
    {
      name: 'Orc',
      isAllowed: false,
      percentageOfChildren: 40
    },
    {
      name: 'Tabaxi',
      isAllowed: false,
      percentageOfChildren: 15
    },
    {
      name: 'Tiefling',
      isAllowed: false,
      percentageOfChildren: 5
    },
    {
      name: 'Tortle',
      isAllowed: false,
      percentageOfChildren: 5
    },
    {
      name: 'Triton',
      isAllowed: false,
      percentageOfChildren: 20
    },
  ];

});
