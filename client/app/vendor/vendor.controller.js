'use strict';
(function(){

class VendorComponent {
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
    controller: VendorComponent
  });

})();
