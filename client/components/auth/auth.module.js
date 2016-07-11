'use strict';

angular.module('aApp.auth', ['aApp.constants', 'aApp.util', 'ngCookies', 'ui.router'])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
