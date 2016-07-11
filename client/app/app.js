'use strict';

angular.module('aApp', ['aApp.auth', 'aApp.admin', 'aApp.constants', 'ngCookies', 'ngResource',
    'ngSanitize', 'ui.router', 'ui.bootstrap', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
