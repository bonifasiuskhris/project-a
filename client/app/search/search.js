'use strict';

angular.module('aApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('search', {
        url: '/search',
        template: '<search></search>'
      });
  });
