'use strict';

angular.module('aApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('search', {
        url: '/search/:building',
        template: '<search></search>',
        authenticate: true
      });
  });
