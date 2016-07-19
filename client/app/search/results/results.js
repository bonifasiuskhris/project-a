'use strict';

angular.module('aApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('search.results', {
        url: '/results',
        template: '<results></results>'
      });
  });
