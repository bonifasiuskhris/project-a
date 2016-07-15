'use strict';

describe('Component: VendorComponent', function () {

  // load the controller's module
  beforeEach(module('aApp'));

  var VendorComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    VendorComponent = $componentController('VendorComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
