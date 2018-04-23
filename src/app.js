var app = angular.module('dmHelperApp', [
  'ui.router',
  'ngMaterial',
  'ui.grid',
  'angularMoment',
  'headerModule',
  'dashboardModule',
  'dungeonsModule',
  'citiesModule',
  'demographicsModule'
]);

app.config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {

  //#region Routing
  $stateProvider.
      state('root', {
        url: '',
        views: {
          'header': {
            templateUrl: 'header/header.view.html',
            controller: 'AppHeaderController',
            controllerAs: 'vm'
          },
          'workspace': {}
        }
      }).
        state('root.dashboard', {
          url: '/dashboard',
          views: {
            'workspace@': {
              templateUrl: 'dashboard/dashboard.view.html',
              controller: 'DashboardController',
              controllerAs: 'vm'
            }
          }
        }).
        state('root.dungeons', {
          url: '/dungeons',
          views: {
            'workspace@': {
              templateUrl: 'dungeons/dungeons.view.html',
              controller: 'DungeonsController',
              controllerAs: 'vm'
            }
          }
        }).
        state('root.cities', {
          url: '/cities',
          views: {
            'workspace@': {
              templateUrl: 'cities/cities.view.html',
              controller: 'CitiesController',
              controllerAs: 'vm'
            }
          }
        }).
        state('root.demographics', {
          url: '/demographics',
          views: {
            'workspace@': {
              templateUrl: 'demographics/demographics.view.html',
              controller: 'DemographicsController',
              controllerAs: 'vm'
            }
          }
        });
  //#endregion

  //#region Theming
  $mdThemingProvider.definePalette('dm-indigo', {
    '50': 'e3e1eb',
    '100': 'bab3cc',
    '200': '8c81ab',
    '300': '5d4e89',
    '400': '3b286f',
    '500': '180256',
    '600': '15024f',
    '700': '110145',
    '800': '0e013c',
    '900': '08012b',
    'A100': '7065ff',
    'A200': '4032ff',
    'A400': '1200fe',
    'A700': '1000e5',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': [
      '50',
      '100',
      '200'
    ],
    'contrastLightColors': [
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
      'A100',
      'A200',
      'A400',
      'A700'
    ]
  });
  $mdThemingProvider.definePalette('dm-brown', {
    '50': 'f0eae0',
    '100': 'd8c9b3',
    '200': 'bfa680',
    '300': 'a5824d',
    '400': '916726',
    '500': '7e4c00',
    '600': '764500',
    '700': '6b3c00',
    '800': '613300',
    '900': '4e2400',
    'A100': 'ffae81',
    'A200': 'ff8d4e',
    'A400': 'ff6c1b',
    'A700': 'ff5c02',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': [
      '50',
      '100',
      '200',
      '300',
      'A100',
      'A200',
      'A400',
      'A700'
    ],
    'contrastLightColors': [
      '400',
      '500',
      '600',
      '700',
      '800',
      '900'
    ]
  });
  $mdThemingProvider.definePalette('dm-green', {
    '50': 'edefe0',
    '100': 'd1d7b3',
    '200': 'b3bd80',
    '300': '94a24d',
    '400': '7d8e26',
    '500': '667a00',
    '600': '5e7200',
    '700': '536700',
    '800': '495d00',
    '900': '384a00',
    'A100': 'd7ff7e',
    'A200': 'c7ff4b',
    'A400': 'b7ff18',
    'A700': 'affd00',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': [
      '50',
      '100',
      '200',
      '300',
      'A100',
      'A200',
      'A400',
      'A700'
    ],
    'contrastLightColors': [
      '400',
      '500',
      '600',
      '700',
      '800',
      '900'
    ]
  });
  $mdThemingProvider.definePalette('dm-red', {
    '50': 'f0e1e0',
    '100': 'd8b3b3',
    '200': 'bf8180',
    '300': 'a54f4d',
    '400': '912926',
    '500': '7e0300',
    '600': '760300',
    '700': '6b0200',
    '800': '610200',
    '900': '4e0100',
    'A100': 'ff8181',
    'A200': 'ff4e4e',
    'A400': 'ff1b1b',
    'A700': 'ff0202',
    'contrastDefaultColor': 'light',
    'contrastDarkColors': [
      '50',
      '100',
      '200',
      'A100',
      'A200'
    ],
    'contrastLightColors': [
      '300',
      '400',
      '500',
      '600',
      '700',
      '800',
      '900',
      'A400',
      'A700'
    ]
  });

  $mdThemingProvider.theme('default')
      .primaryPalette('dm-indigo')
      .accentPalette('dm-brown')
      .warnPalette('dm-red');
  //#endregion
});
