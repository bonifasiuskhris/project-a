'use strict';

angular.module('aApp.admin')
  .config(function($stateProvider) {
    $stateProvider
    .state('admin', {
      url: '/admin',
      templateUrl: 'app/admin/admin.html',
      controller: 'AdminController',
      controllerAs: 'admin',
      authenticate: 'admin'
    })
    .state('admin.manageUsers', {
      url: '/admin',
      templateUrl: 'app/admin/adminUsers.html',
      controller: 'AdminController',
      controllerAs: 'admin',
      authenticate: 'admin'
    })
    .state('admin.manageVendors', {
      url: '/admin',
      templateUrl: 'app/admin/adminVendors.html',
      controller: 'AdminController',
      controllerAs: 'admin',
      authenticate: 'admin'
    });
  });
