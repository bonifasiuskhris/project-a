'use strict';

angular.module('aApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('results', {
        url: '/results',
        template: '<results></results>'
      });
  });
