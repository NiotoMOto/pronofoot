'use strict';

describe('Service: apiFoot', function () {

  // load the service's module
  beforeEach(module('backApp'));

  // instantiate service
  var apiFoot;
  beforeEach(inject(function (_apiFoot_) {
    apiFoot = _apiFoot_;
  }));

  it('should do something', function () {
    expect(!!apiFoot).toBe(true);
  });

});
