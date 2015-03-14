/*global moment, _*/

angular.module('hack4sweden', [
    'templates-app',
    'ngRoute',
    'ngResource',
    'ngSanitize',
    'ngCookies',
    'hack4sweden.constant',
    'se.sll.hsf.ng-commons',
    'tc.chartjs'
  ]).config(function ($routeProvider, $locationProvider, settings, translationsProvider, $logProvider, $httpProvider) {
    settings.translationModules.forEach(function (translationModule) {
      translationsProvider.register(translationModule);
    });

    $logProvider.debugEnabled(true);

    $routeProvider
      .when('/', {
        templateUrl: 'templates/Start.html',
        controller: 'StartCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    /*    $locationProvider.html5Mode(true);
     $locationProvider.hashPrefix('!'); */
  })

  .config(function($httpProvider) {
    $httpProvider.defaults.headers.common['Accept-Language'] = 'en-gb';
  })

  .run(function($rootScope, $location) {
    
  });
