'use strict';
(function(){

class VendorController {
  constructor() {
    this.message = 'Hello';
  }


  createVendor() {
  	return 0;
  }

}

angular.module('aApp')
  .component('vendor', {
    templateUrl: 'app/vendor/vendor.html',
    controller: VendorController,
    controllerAs: 'vendor',
    authenticate: 'vendor'
  });

})();
