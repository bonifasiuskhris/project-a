'use strict';

describe('Component: ResultsComponent', function () {

  // load the controller's module
  beforeEach(module('aApp'));

  var ResultsComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ResultsComponent = $componentController('ResultsComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
