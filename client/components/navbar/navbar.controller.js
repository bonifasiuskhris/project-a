'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.isVendor = Auth.isVendor;
    this.getCurrentUser = Auth.getCurrentUser;
  }

}

angular.module('aApp')
  .controller('NavbarController', NavbarController);
