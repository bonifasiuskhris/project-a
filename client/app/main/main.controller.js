'use strict';

(function() {

  class MainController {

    constructor($http, Auth) {
      this.$http = $http;
      this.isLoggedIn = Auth.isLoggedIn;
      this.isAdmin = Auth.isAdmin;
      this.awesomeThings = [];
      this.getCurrentUser = Auth.getCurrentUser;
    }

    $onInit() {
      if(this.isLoggedIn) {
      this.$http.get('/api/things')
        .then(response => {
          this.awesomeThings = response.data;
        });
        console.log('this is Customer');
      }
      else if(this.isAdmin) {
        console.log('this is Admin');
      }
      else {
        console.log('this is Vendor');
      }
    }

    addThing() {
      if (this.newThing) {
        this.$http.post('/api/things', {
          name: this.newThing
        });
        this.newThing = '';
      }
    }

    deleteThing(thing) {
      this.$http.delete('/api/things/' + thing._id);
    }
  }

  angular.module('aApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs: 'mainCtrl'
    });
})();
