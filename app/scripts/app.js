'use strict';

/**
 * @ngdoc overview
 * @name portfo2015App
 * @description
 * # portfo2015App
 *
 * Main module of the application.
 */
angular
  .module('portfo2015App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/cuzin', {
        templateUrl: 'views/cuzin.html',
        controller: 'AboutCtrl'
      })
      .when('/spot', {
        templateUrl: 'views/spot.html',
        controller: 'AboutCtrl'
      })
      .when('/withwine', {
        templateUrl: 'views/withwine.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
