'use strict';

angular.module('aApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('vendor', {
        url: '/vendor',
        template: '<vendor></vendor>'
      });
  });
