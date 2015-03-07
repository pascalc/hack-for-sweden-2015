/*global moment, _*/

angular.module('hack4sweden', [
    'templates-app',
    'ngRoute',
    'ngResource',
    'ngSanitize',
    'ngCookies',
    'hack4sweden.constant',
    'se.sll.hsf.ng-commons'
  ]).config(function ($routeProvider, $locationProvider, settings, translationsProvider, $logProvider, $httpProvider) {
    settings.translationModules.forEach(function (translationModule) {
      translationsProvider.register(translationModule);
    });

    $logProvider.debugEnabled(true);

    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'templates/Start.html',
    //     controller: 'StartCtrl'
    //   })
    //   .when('/OfferToGive/:UnitOfferID', {
    //     templateUrl: 'templates/OfferToGiveDetails.html',
    //     controller: 'OfferToGiveDetailsCtrl'
    //   })
    //   .when('/GivenOffer/:GivenOfferID', {
    //     templateUrl: 'templates/GivenOfferDetails.html',
    //     controller: 'GivenOfferDetailsCtrl'
    //   })
    //   .when('/ChoosePatient', {
    //     templateUrl: 'templates/choosePatient.html',
    //     controller: 'ChoosePatientCtrl'
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });

    /*    $locationProvider.html5Mode(true);
     $locationProvider.hashPrefix('!'); */
  })

  .run(function($rootScope, $location) {
    
  });
