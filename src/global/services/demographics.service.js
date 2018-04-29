var app = angular.module('dmHelperApp');

app.service('Demographics', function () {
  var service_ = this;

  service_.customIdCounter = 1000;
  service_.defaultTagList = {
    'dflt': {
      name: 'Default',
      isAllowed: false,
      type: 'tag',
      key: 'dflt',
      id: 'tag-dflt'
    },
    'cust': {
      name: 'Custom',
      isAllowed: false,
      type: 'tag',
      key: 'cust',
      id: 'tag-cust'
    },
    'phb': {
      name: 'Player\'s Handbook',
      isAllowed: false,
      type: 'tag',
      key: 'phb',
      id: 'tag-core-1'
    },
    'dmg': {
      name: 'Dungeon Master\'s Guide',
      isAllowed: false,
      type: 'tag',
      key: 'dmg',
      id: 'tag-core-3'
    },
    'elm': {
      name: 'Elemental Evil Player\'s Companion',
      isAllowed: false,
      type: 'tag',
      key: 'elm',
      id: 'tag-supp-01'
    },
    'scg': {
      name: 'Sword Coast Adventure Guide',
      isAllowed: false,
      type: 'tag',
      key: 'scg',
      id: 'tag-supp-02'
    },
    'vol': {
      name: 'Volo\'s Guide to Monsters',
      isAllowed: false,
      type: 'tag',
      key: 'vol',
      id: 'tag-supp-03'
    },
    'xan': {
      name: 'Xanathar\'s Guide to Everything',
      isAllowed: false,
      type: 'tag',
      key: 'xan',
      id: 'tag-supp-04'
    },
    'psz': {
      name: 'Plane Shift: Zendikar',
      isAllowed: false,
      type: 'tag',
      key: 'psz',
      id: 'tag-misc-001'
    },
    'ttp': {
      name: 'The Tortle Package',
      isAllowed: false,
      type: 'tag',
      key: 'ttp',
      id: 'tag-misc-002'
    },
    'ua': {
      name: 'Unearthed Arcana',
      isAllowed: true,
      type: 'tag',
      key: 'ua',
      id: 'tag-ua-001'
    },
    'uacdv': {
      name: 'Unearthed Arcana: Class Design Variants',
      isAllowed: false,
      type: 'tag',
      key: 'uacdv',
      src: 'http://media.wizards.com/2015/downloads/dnd/UA3_ClassDesignVariants.pdf',
      id: 'tag-ua-002'
    },
    'uacr': {
      name: 'Unearthed Arcana: Classics Revisited',
      isAllowed: false,
      type: 'tag',
      key: 'uacr',
      src: 'http://media.wizards.com/2015/downloads/dnd/04_UA_Classics_Revisited.pdf',
      id: 'tag-ua-003'
    },
    'uaeb': {
      name: 'Unearthed Arcana: Eberron',
      isAllowed: false,
      type: 'tag',
      key: 'uaeb',
      src: 'http://media.wizards.com/2015/downloads/dnd/UA_Eberron_v1.pdf',
      id: 'tag-ua-004'
    },
    'uagh': {
      name: 'Unearthed Arcana: Gothic Heroes',
      isAllowed: false,
      type: 'tag',
      key: 'uagh',
      src: 'https://dnd.wizards.com/sites/default/files/media/upload/articles/UA%20Gothic%20Characters.pdf',
      id: 'tag-ua-005'
    },
    'uamm': {
      name: 'Unearthed Arcana: Modern Magic',
      isAllowed: false,
      type: 'tag',
      key: 'uamm',
      src: 'http://media.wizards.com/2015/downloads/dnd/UA_ModernMagic.pdf',
      id: 'tag-ua-006'
    },
    'uaps': {
      name: 'Unearthed Arcana: Psionics & The Mystic',
      isAllowed: false,
      type: 'tag',
      key: 'uamm',
      src: 'http://media.wizards.com/2016/downloads/Psionics_and_Mystic_V2.pdf',
      id: 'tag-ua-007'
    },
    'uarmpc': {
      name: 'Unearthed Arcana: Psionics & The Mystic',
      isAllowed: false,
      type: 'tag',
      key: 'uarmpc',
      src: 'http://media.wizards.com/2015/downloads/dnd/UA_Rune_Magic_Prestige_Class.pdf',
      id: 'tag-ua-008'
    },
    'uaro': {
      name: 'Unearthed Arcana: Ranger Options',
      isAllowed: false,
      type: 'tag',
      key: 'uaro',
      src: 'http://media.wizards.com/2015/downloads/dnd/DX_0907_UA_RangerOptions.pdf',
      id: 'tag-ua-009'
    },
    'uatom': {
      name: 'Unearthed Arcana: That Old Black Magic',
      isAllowed: false,
      type: 'tag',
      key: 'uatom',
      src: 'https://media.wizards.com/2015/downloads/dnd/07_UA_That_Old_Black_Magic.pdf',
      id: 'tag-ua-010'
    },
    'uawb': {
      name: 'Unearthed Arcana: Waterborne Adventures',
      isAllowed: false,
      type: 'tag',
      key: 'uawb',
      src: 'https://media.wizards.com/2015/downloads/ dnd /UA_ Waterborne_v3.pdf',
      id: 'tag-ua-011'
    },
    'abr': {
      name: 'Aberration',
      isAllowed: true,
      type: 'tag',
      key: 'abr',
      id: 'tag-subtype-01'
    },
    'bst': {
      name: 'Beast',
      isAllowed: true,
      type: 'tag',
      key: 'bst',
      id: 'tag-subtype-02'
    },
    'cel': {
      name: 'Celestial',
      isAllowed: true,
      type: 'tag',
      key: 'cel',
      id: 'tag-subtype-03'
    },
    'con': {
      name: 'Construct',
      isAllowed: true,
      type: 'tag',
      key: 'con',
      id: 'tag-subtype-04'
    },
    'dra': {
      name: 'Dragon',
      isAllowed: true,
      type: 'tag',
      key: 'dra',
      id: 'tag-subtype-05'
    },
    'ele': {
      name: 'Elemental',
      isAllowed: true,
      type: 'tag',
      key: 'ele',
      id: 'tag-subtype-06'
    },
    'fey': {
      name: 'Fey',
      isAllowed: true,
      type: 'tag',
      key: 'fey',
      id: 'tag-subtype-07'
    },
    'fnd': {
      name: 'Fiend',
      isAllowed: true,
      type: 'tag',
      key: 'fnd',
      id: 'tag-subtype-08'
    },
    'gnt': {
      name: 'Giant',
      isAllowed: true,
      type: 'tag',
      key: 'gnt',
      id: 'tag-subtype-09'
    },
    'hum': {
      name: 'Humanoid',
      isAllowed: true,
      type: 'tag',
      key: 'hum',
      id: 'tag-subtype-10'
    },
    'mon': {
      name: 'Monstrosity',
      isAllowed: true,
      type: 'tag',
      key: 'mon',
      id: 'tag-subtype-11'
    },
    'ooz': {
      name: 'Ooze',
      isAllowed: true,
      type: 'tag',
      key: 'ooz',
      id: 'tag-subtype-12'
    },
    'plt': {
      name: 'Plant',
      isAllowed: true,
      type: 'tag',
      key: 'plt',
      id: 'tag-subtype-13'
    },
    'und': {
      name: 'Undead',
      isAllowed: true,
      type: 'tag',
      key: 'und',
      id: 'tag-subtype-14'
    },
    'dmn': {
      name: 'Demon',
      isAllowed: true,
      type: 'tag',
      key: 'dmn',
      id: 'tag-subtype-15'
    },
    'dvl': {
      name: 'Devil',
      isAllowed: true,
      type: 'tag',
      key: 'dvl',
      id: 'tag-subtype-16'
    },
    'gob': {
      name: 'Goblinoid',
      isAllowed: true,
      type: 'tag',
      key: 'gob',
      id: 'tag-subtype-17'
    },
    'shp': {
      name: 'Shapechanger',
      isAllowed: true,
      type: 'tag',
      key: 'shp',
      id: 'tag-subtype-18'
    },
    'ttn': {
      name: 'Titan',
      isAllowed: true,
      type: 'tag',
      key: 'ttn',
      id: 'tag-subtype-19'
    },
    'yug': {
      name: 'Yugoloth',
      isAllowed: true,
      type: 'tag',
      key: 'yug',
      id: 'tag-subtype-20'
    },

    'law': {
      name: 'Lawful',
      isAllowed: true,
      type: 'tag',
      key: 'law',
      id: 'tag-align-01'
    },
    'ntr': {
      name: 'Neutral',
      isAllowed: true,
      type: 'tag',
      key: 'ntr',
      id: 'tag-align-02'
    },
    'cht': {
      name: 'Chaotic',
      isAllowed: true,
      type: 'tag',
      key: 'cht',
      id: 'tag-align-03'
    },
    'god': {
      name: 'Good',
      isAllowed: true,
      type: 'tag',
      key: 'god',
      id: 'tag-align-04'
    },
    'evl': {
      name: 'Evil',
      isAllowed: true,
      type: 'tag',
      key: 'evl',
      id: 'tag-align-05'
    },
    'lg': {
      name: 'Lawful Good',
      isAllowed: true,
      type: 'tag',
      key: 'lg',
      id: 'tag-align-06'
    },
    'ng': {
      name: 'Neutral Good',
      isAllowed: true,
      type: 'tag',
      key: 'ng',
      id: 'tag-align-07'
    },
    'cg': {
      name: 'Chaotic Good',
      isAllowed: true,
      type: 'tag',
      key: 'cg',
      id: 'tag-align-08'
    },
    'ln': {
      name: 'Lawful Neutral',
      isAllowed: true,
      type: 'tag',
      key: 'ln',
      id: 'tag-align-09'
    },
    'tn': {
      name: 'True Neutral',
      isAllowed: true,
      type: 'tag',
      key: 'tn',
      id: 'tag-align-10'
    },
    'cn': {
      name: 'Chaotic Neutral',
      isAllowed: true,
      type: 'tag',
      key: 'cn',
      id: 'tag-align-11'
    },
    'le': {
      name: 'Lawful Evil',
      isAllowed: true,
      type: 'tag',
      key: 'le',
      id: 'tag-align-12'
    },
    'ne': {
      name: 'Neutral Evil',
      isAllowed: true,
      type: 'tag',
      key: 'ne',
      id: 'tag-align-13'
    },
    'ce': {
      name: 'Chaotic Evil',
      isAllowed: true,
      type: 'tag',
      key: 'ce',
      id: 'tag-align-14'
    }

  };

  // weighted age categories should add up to 100. Then they can be used as a percentage OR weighted random value.
  service_.defaultAgeCategories = [
    {
      id: 'age-001',
      name: 'Adult',
      isAllowed: true,
      type: 'age',
      tags: [
        service_.defaultTagList.dflt
      ],
      weight: {
        default: 50,
        custom: 50
      }
    },
    {
      id: 'age-002',
      name: 'Middle Age',
      isAllowed: true,
      type: 'age',
      tags: [
        service_.defaultTagList.dflt
      ],
      weight: {
        default: 35,
        custom: 35
      }
    },
    {
      id: 'age-003',
      name: 'Old',
      isAllowed: true,
      type: 'age',
      tags: [
        service_.defaultTagList.dflt
      ],
      weight: {
        default: 13,
        custom: 13
      }
    },
    {
      id: 'age-004',
      name: 'Venerable',
      isAllowed: true,
      type: 'age',
      tags: [
        service_.defaultTagList.dflt
      ],
      weight: {
        default: 2,
        custom: 2
      }
    }
  ];
  service_.defaultRaces = [
    {
      isAllowed: true,
      name: 'Human',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.phb,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 40,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'dflt-001',
          id: 'dflt-001a'
        },
        {
          isAllowed: true,
          name: 'Variant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-001',
          id: 'dflt-001b'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-001',
          id: 'dflt-001c'
        }
      ],
      id: 'dflt-001'
    },
    {
      isAllowed: true,
      name: 'Halfling',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.phb,
        service_.defaultTagList.scg,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 30,
      subraces: [
        {
          isAllowed: true,
          name: 'Lightfoot',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 50,
            custom: 50
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 50,
          owner: 'dflt-002',
          id: 'dflt-002a'
        },
        {
          isAllowed: true,
          name: 'Stout',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 40,
            custom: 40
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 40,
          owner: 'dflt-002',
          id: 'dflt-002b'
        },
        {
          isAllowed: true,
          name: 'Ghostwise',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.scg
          ],
          weight: {
            default: 10,
            custom: 10
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 10,
          owner: 'dflt-002',
          id: 'dflt-002c'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-002',
          id: 'dflt-002d'
        }
      ],
      id: 'dflt-002'
    },
    {
      isAllowed: true,
      name: 'Elf',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.phb,
        service_.defaultTagList.dmg,
        service_.defaultTagList.psz,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 20,
      subraces: [
        {
          isAllowed: true,
          name: 'Drow',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 5,
            custom: 5
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 5,
          owner: 'dflt-003',
          id: 'dflt-003a'
        },
        {
          isAllowed: true,
          name: 'Eladrin',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.dmg
          ],
          weight: {
            default: 5,
            custom: 5
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 5,
          owner: 'dflt-003',
          id: 'dflt-003b'
        },
        {
          isAllowed: true,
          name: 'High Elf',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 50,
            custom: 50
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 50,
          owner: 'dflt-003',
          id: 'dflt-003c'
        },
        {
          isAllowed: true,
          name: 'Wood Elf',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 40,
            custom: 40
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 40,
          owner: 'dflt-003',
          id: 'dflt-003d'
        },
        {
          isAllowed: true,
          name: 'Joraga',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.psz
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-003',
          id: 'dflt-003e'
        },
        {
          isAllowed: true,
          name: 'Mul Daya',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.psz
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-003',
          id: 'dflt-003f'
        },
        {
          isAllowed: true,
          name: 'Tajuru',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.psz
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-003',
          id: 'dflt-003g'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-003',
          id: 'dflt-003h'
        }
      ],
      id: 'dflt-003'
    },
    {
      isAllowed: true,
      name: 'Dwarf',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.phb,
        service_.defaultTagList.scg,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 10,
      subraces: [
        {
          isAllowed: true,
          name: 'Hill Dwarf',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 60,
            custom: 60
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 60,
          owner: 'dflt-004',
          id: 'dflt-004a'
        },
        {
          isAllowed: true,
          name: 'Mountain Dwarf',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 35,
            custom: 35
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 35,
          owner: 'dflt-004',
          id: 'dflt-004b'
        },
        {
          isAllowed: true,
          name: 'Duergar',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.scg
          ],
          weight: {
            default: 5,
            custom: 5
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 5,
          owner: 'dflt-004',
          id: 'dflt-004c'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-004',
          id: 'dflt-004d'
        }
      ],
      id: 'dflt-004'
    },
    {
      isAllowed: true,
      name: 'Gnome',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.phb,
        service_.defaultTagList.elm,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 10,
      subraces: [
        {
          isAllowed: true,
          name: 'Deep Gnome',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.elm
          ],
          weight: {
            default: 5,
            custom: 5
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 5,
          owner: 'dflt-005',
          id: 'dflt-005a'
        },
        {
          isAllowed: true,
          name: 'Forest Gnome',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 60,
            custom: 60
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 60,
          owner: 'dflt-005',
          id: 'dflt-005b'
        },
        {
          isAllowed: true,
          name: 'Rock Gnome',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 35,
            custom: 35
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 35,
          owner: 'dflt-005',
          id: 'dflt-005c'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-005',
          id: 'dflt-005d'
        }
      ],
      id: 'dflt-005'
    },
    {
      isAllowed: true,
      name: 'Half Elf',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.phb,
        service_.defaultTagList.scg,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 5,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.scg
          ],
          weight: {
            default: 100,
            custom: 100
          },
          percentOfTotalChildrenForRace: 100,
          owner: 'dflt-006',
          id: 'dflt-006a'
        },
        {
          isAllowed: true,
          name: 'Half Wood Elf',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.scg
          ],
          weight: {
            default: 0,
            custom: 0
          },
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-006',
          id: 'dflt-006b'
        },
        {
          isAllowed: true,
          name: 'Half Moon/Sun Elf',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.scg
          ],
          weight: {
            default: 0,
            custom: 0
          },
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-006',
          id: 'dflt-006c'
        },
        {
          isAllowed: true,
          name: 'Half Drow Elf',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.scg
          ],
          weight: {
            default: 0,
            custom: 0
          },
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-006',
          id: 'dflt-006d'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-006',
          id: 'dflt-006e'
        }
      ],
      id: 'dflt-006'
    },
    {
      isAllowed: true,
      name: 'Half Orc',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.phb,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 5,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'dflt-007',
          id: 'dflt-007a'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-007',
          id: 'dflt-007b'
        }
      ],
      id: 'dflt-007'
    },
    {
      isAllowed: false,
      name: 'Dragonborn',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.phb,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 10,
      subraces: [
        {
          isAllowed: false,
          name: 'Black',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 10,
            custom: 10
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 10,
          owner: 'dflt-008',
          id: 'dflt-008a'
        },
        {
          isAllowed: false,
          name: 'Blue',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 10,
            custom: 10
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 10,
          owner: 'dflt-008',
          id: 'dflt-008b'
        },
        {
          isAllowed: false,
          name: 'Brass',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 10,
            custom: 10
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 10,
          owner: 'dflt-008',
          id: 'dflt-008c'
        },
        {
          isAllowed: false,
          name: 'Bronze',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 10,
            custom: 10
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 10,
          owner: 'dflt-008',
          id: 'dflt-008d'
        },
        {
          isAllowed: false,
          name: 'Copper',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 10,
            custom: 10
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 10,
          owner: 'dflt-008',
          id: 'dflt-008e'
        },
        {
          isAllowed: false,
          name: 'Gold',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 10,
            custom: 10
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 10,
          owner: 'dflt-008',
          id: 'dflt-008f'
        },
        {
          isAllowed: false,
          name: 'Green',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 10,
            custom: 10
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 10,
          owner: 'dflt-008',
          id: 'dflt-008g'
        },
        {
          isAllowed: false,
          name: 'Red',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 10,
            custom: 10
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 10,
          owner: 'dflt-008',
          id: 'dflt-008h'
        },
        {
          isAllowed: false,
          name: 'Silver',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 10,
            custom: 10
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 10,
          owner: 'dflt-008',
          id: 'dflt-008i'
        },
        {
          isAllowed: false,
          name: 'White',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 10,
            custom: 10
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 10,
          owner: 'dflt-008',
          id: 'dflt-008j'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-008',
          id: 'dflt-008k'
        }
      ],
      id: 'dflt-008'
    },
    {
      isAllowed: false,
      name: 'Tiefling',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.phb,
        service_.defaultTagList.uatom,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 5,
      subraces: [
        {
          isAllowed: false,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.phb
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'dflt-009',
          id: 'dflt-009a'
        },
        {
          isAllowed: false,
          name: 'Abyssal',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uatom,
            service_.defaultTagList.dmn
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-009',
          id: 'dflt-009b'
        },
        {
          isAllowed: false,
          name: 'Infernal',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uatom,
            service_.defaultTagList.dvl
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-009',
          id: 'dflt-009c'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'dflt-009',
          id: 'dflt-009d'
        }
      ],
      id: 'dflt-009'
    },
    {
      isAllowed: false,
      name: 'Aarakocra',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.elm,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 10,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.elm
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'elem-001',
          id: 'elem-001a'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'elem-001',
          id: 'elem-001b'
        }
      ],
      id: 'elem-001'
    },
    {
      isAllowed: false,
      name: 'Genasi',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.elm,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 10,
      subraces: [
        {
          isAllowed: false,
          name: 'Air Genasi',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.elm
          ],
          weight: {
            default: 25,
            custom: 25
          },
          percentOfTotalChildrenForRace: 25,
          owner: 'elem-002',
          id: 'elem-002a'
        },
        {
          isAllowed: false,
          name: 'Earth Genasi',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.elm
          ],
          weight: {
            default: 25,
            custom: 25
          },
          percentOfTotalChildrenForRace: 25,
          owner: 'elem-002',
          id: 'elem-002b'
        },
        {
          isAllowed: false,
          name: 'Fire Genasi',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.elm
          ],
          weight: {
            default: 25,
            custom: 25
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 25,
          owner: 'elem-002',
          id: 'elem-002c'
        },
        {
          isAllowed: false,
          name: 'Water Genasi',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.elm
          ],
          weight: {
            default: 25,
            custom: 25
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 25,
          owner: 'elem-002',
          id: 'elem-002d'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'elem-002',
          id: 'elem-002e'
        }
      ],
      id: 'elem-002'
    },
    {
      isAllowed: false,
      name: 'Goliath',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.elm,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 10,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.elm
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'elem-003',
          id: 'elem-003a'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'elem-003',
          id: 'elem-003b'
        }
      ],
      id: 'elem-003'
    },
    {
      isAllowed: false,
      name: 'Aasimar',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.dmg,
        service_.defaultTagList.vol,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 5,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.dmg
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-001',
          id: 'volo-001a'
        },
        {
          isAllowed: false,
          name: 'Fallen',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.vol
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-001',
          id: 'volo-001b'
        },
        {
          isAllowed: false,
          name: 'Protector',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.vol
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-001',
          id: 'volo-001c'
        },
        {
          isAllowed: false,
          name: 'Scourge',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.vol
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-001',
          id: 'volo-001d'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-001',
          id: 'volo-001e'
        }
      ],
      id: 'volo-001'
    },
    {
      isAllowed: false,
      name: 'Bugbear',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.vol,
        service_.defaultTagList.uagh,
        service_.defaultTagList.gob
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 30,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.vol,
            service_.defaultTagList.gob
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-002',
          id: 'volo-002a'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.gob,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-002',
          id: 'volo-002b'
        }
      ],
      id: 'volo-002'
    },
    {
      isAllowed: false,
      name: 'Firbolg',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.vol,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 20,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.vol
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-003',
          id: 'volo-003a'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-003',
          id: 'volo-003b'
        }
      ],
      id: 'volo-003'
    },
    {
      isAllowed: false,
      name: 'Goblin',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.vol,
        service_.defaultTagList.psz,
        service_.defaultTagList.uagh,
        service_.defaultTagList.gob
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 40,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.vol,
            service_.defaultTagList.gob
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-004',
          id: 'volo-004a'
        },
        {
          isAllowed: false,
          name: 'Grotag',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.psz,
            service_.defaultTagList.gob
          ],
          weight: {
            default: 0,
            custom: 0
          },
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-004',
          id: 'volo-004b'
        },
        {
          isAllowed: false,
          name: 'Lavastep',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.psz,
            service_.defaultTagList.gob
          ],
          weight: {
            default: 0,
            custom: 0
          },
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-004',
          id: 'volo-004c'
        },
        {
          isAllowed: false,
          name: 'Tuktuk',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.psz,
            service_.defaultTagList.gob
          ],
          weight: {
            default: 0,
            custom: 0
          },
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-004',
          id: 'volo-004d'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.gob,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-004',
          id: 'volo-004e'
        }
      ],
      id: 'volo-004'
    },
    {
      isAllowed: false,
      name: 'Hobgoblin',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.vol,
        service_.defaultTagList.uagh,
        service_.defaultTagList.gob
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 30,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.vol,
            service_.defaultTagList.gob
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-005',
          id: 'volo-005a'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.gob,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-005',
          id: 'volo-005b'
        }
      ],
      id: 'volo-005'
    },
    {
      isAllowed: false,
      name: 'Kenku',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.vol,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 10,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.vol
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-006',
          id: 'volo-006a'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-006',
          id: 'volo-006b'
        }
      ],
      id: 'volo-006'
    },
    {
      isAllowed: false,
      name: 'Kobold',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.vol,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 40,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.vol
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-007',
          id: 'volo-007a'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-007',
          id: 'volo-007b'
        }
      ],
      id: 'volo-007'
    },
    {
      isAllowed: false,
      name: 'Lizardfolk',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.vol,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 30,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.vol
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-008',
          id: 'volo-008a'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-008',
          id: 'volo-008b'
        }
      ],
      id: 'volo-008'
    },
    {
      isAllowed: false,
      name: 'Orc',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.vol,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 40,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.vol
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-009',
          id: 'volo-009a'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-009',
          id: 'volo-009b'
        }
      ],
      id: 'volo-009'
    },
    {
      isAllowed: false,
      name: 'Tabaxi',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.vol,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 15,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.vol
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-010',
          id: 'volo-010a'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-010',
          id: 'volo-010b'
        }
      ],
      id: 'volo-010'
    },
    {
      isAllowed: false,
      name: 'Triton',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.vol,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 20,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.vol
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-011',
          id: 'volo-011a'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-011',
          id: 'volo-011b'
        }
      ],
      id: 'volo-011'
    },
    {
      isAllowed: false,
      name: 'Yuan-Ti Pureblood',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.vol,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 5,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.vol
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'volo-012',
          id: 'volo-012a'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'volo-012',
          id: 'volo-012b'
        }
      ],
      id: 'volo-012'
    },
    {
      isAllowed: false,
      name: 'Tortle',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.ttp,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 5,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.ttp
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'tort-001',
          id: 'tort-001a'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'tort-001',
          id: 'tort-001b'
        }
      ],
      id: 'tort-001'
    },
    {
      isAllowed: false,
      name: 'Changeling',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.uaeb,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 10,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uaeb
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'uaeb-001',
          id: 'uaeb-001a'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'uaeb-001',
          id: 'uaeb-001b'
        }
      ],
      id: 'uaeb-001'
    },
    {
      isAllowed: false,
      name: 'Shifter',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.uaeb,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 10,
      subraces: [
        {
          isAllowed: false,
          name: 'Beasthide',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uaeb
          ],
          weight: {
            default: 16,
            custom: 16
          },
          percentOfTotalChildrenForRace: 16,
          owner: 'uaeb-002',
          id: 'uaeb-002a'
        },
        {
          isAllowed: false,
          name: 'Cliffwalk',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uaeb
          ],
          weight: {
            default: 16,
            custom: 16
          },
          percentOfTotalChildrenForRace: 16,
          owner: 'uaeb-002',
          id: 'uaeb-002b'
        },
        {
          isAllowed: false,
          name: 'Longstride',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uaeb
          ],
          weight: {
            default: 16,
            custom: 16
          },
          percentOfTotalChildrenForRace: 16,
          owner: 'uaeb-002',
          id: 'uaeb-002c'
        },
        {
          isAllowed: false,
          name: 'Longtooth',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uaeb
          ],
          weight: {
            default: 16,
            custom: 16
          },
          percentOfTotalChildrenForRace: 16,
          owner: 'uaeb-002',
          id: 'uaeb-002d'
        },
        {
          isAllowed: false,
          name: 'Razorclaw',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uaeb
          ],
          weight: {
            default: 16,
            custom: 16
          },
          percentOfTotalChildrenForRace: 16,
          owner: 'uaeb-002',
          id: 'uaeb-002e'
        },
        {
          isAllowed: false,
          name: 'Wildhunt',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uaeb
          ],
          weight: {
            default: 20,
            custom: 20
          },
          percentOfTotalChildrenForRace: 20,
          owner: 'uaeb-002',
          id: 'uaeb-002f'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'uaeb-002',
          id: 'uaeb-002g'
        }
      ],
      id: 'uaeb-002'
    },
    {
      isAllowed: false,
      name: 'Warforged',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.uaeb
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 0,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uaeb
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'uaeb-003',
          id: 'uaeb-003a'
        }
      ],
      id: 'uaeb-003'
    },
    {
      isAllowed: false,
      name: 'Kor',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.psz,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 20,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.psz
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'psz-001',
          id: 'psz-001a'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'psz-001',
          id: 'psz-001b'
        }
      ],
      id: 'psz-001'
    },
    {
      isAllowed: false,
      name: 'Merfolk',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.psz,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 20,
      subraces: [
        {
          isAllowed: false,
          name: 'Cosi',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.psz
          ],
          weight: {
            default: 33,
            custom: 33
          },
          percentOfTotalChildrenForRace: 33,
          owner: 'psz-002',
          id: 'psz-002a'
        },
        {
          isAllowed: false,
          name: 'Emeria',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.psz
          ],
          weight: {
            default: 34,
            custom: 34
          },
          percentOfTotalChildrenForRace: 34,
          owner: 'psz-002',
          id: 'psz-002b'
        },
        {
          isAllowed: false,
          name: 'Ula',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.psz
          ],
          weight: {
            default: 33,
            custom: 33
          },
          percentOfTotalChildrenForRace: 33,
          owner: 'psz-002',
          id: 'psz-002c'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'psz-002',
          id: 'psz-002d'
        }
      ],
      id: 'psz-002'
    },
    {
      isAllowed: false,
      name: 'Vampire',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.psz,
        service_.defaultTagList.und
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 0,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.psz,
            service_.defaultTagList.und
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'psz-003',
          id: 'psz-003a'
        }
      ],
      id: 'psz-003'
    },
    {
      isAllowed: false,
      name: 'Minotaur',
      type: 'race',
      tags: [
        service_.defaultTagList.dflt,
        service_.defaultTagList.uawb,
        service_.defaultTagList.uagh
      ],
      weight: {
        default: 0,
        custom: 0
      },
      ageCategories: service_.defaultAgeCategories,
      percentageOfChildren: 20,
      subraces: [
        {
          isAllowed: true,
          name: 'Default',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uawb
          ],
          weight: {
            default: 100,
            custom: 100
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 100,
          owner: 'uawb-001',
          id: 'uawb-001a'
        },
        {
          isAllowed: true,
          name: 'Revenant',
          type: 'subrace',
          tags: [
            service_.defaultTagList.dflt,
            service_.defaultTagList.uagh,
            service_.defaultTagList.und
          ],
          weight: {
            default: 0,
            custom: 0
          },
          ageCategories: service_.defaultAgeCategories,
          percentOfTotalChildrenForRace: 0,
          owner: 'uawb-001',
          id: 'uawb-001b'
        }
      ],
      id: 'uawb-001'
    }
  ];
  service_.defaultRacialMixtures = [
    {
      weight: 5,
      type: 'Exclusive',
      mix: [
        {
          raceId: 'dflt-0001',
          weight: 100
        },
        {
          name: 'Other',
          weight: 0
        }
      ]
    },
    {
      weight: 25,
      type: 'Isolated',
      mix: [
        {
          raceId: 'dflt-0001',
          weight: 96
        },
        {
          raceId: 'dflt-0002',
          weight: 2
        },
        {
          raceId: 'dflt-0003',
          weight: 1
        },
        {
          name: 'Other',
          weight: 1
        }
      ]
    },
    {
      weight: 60,
      type: 'Mixed',
      mix: [
        {
          raceId: 'dflt-0001',
          weight: 79
        },
        {
          raceId: 'dflt-0002',
          weight: 9
        },
        {
          raceId: 'dflt-0003',
          weight: 5
        },
        {
          raceId: 'dflt-0004',
          weight: 3
        },
        {
          raceId: 'dflt-0005',
          weight: 2
        },
        {
          raceId: 'dflt-0006',
          weight: 1
        },
        {
          raceId: 'dflt-0007',
          weight: 1
        },
        {
          name: 'Other',
          weight: 0
        }
      ]
    },
    {
      weight: 10,
      type: 'Integrated',
      mix: [
        {
          raceId: 'dflt-0001',
          weight: 37
        },
        {
          raceId: 'dflt-0002',
          weight: 20
        },
        {
          raceId: 'dflt-0003',
          weight: 18
        },
        {
          raceId: 'dflt-0004',
          weight: 10
        },
        {
          raceId: 'dflt-0005',
          weight: 7
        },
        {
          raceId: 'dflt-0006',
          weight: 5
        },
        {
          raceId: 'dflt-0007',
          weight: 3
        },
        {
          name: 'Other',
          weight: 0
        }
      ]
    }
  ];

  service_.getCustomId = getCustomId_;

  function getCustomId_() {
    var returnId = 'cust-' + service_.customIdCounter;
    service_.customIdCounter++;
    return returnId;
  }


});
