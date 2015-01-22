'use strict';

describe('Controller: ModalfilecontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('backApp'));

  var ModalfilecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModalfilecontrollerCtrl = $controller('ModalfilecontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
