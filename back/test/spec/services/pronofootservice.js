'use strict';

describe('Service: pronofootService', function () {

  // load the service's module
  beforeEach(module('backApp'));

  // instantiate service
  var pronofootService;
  beforeEach(inject(function (_pronofootService_) {
    pronofootService = _pronofootService_;
  }));

  it('should do something', function () {
    expect(!!pronofootService).toBe(true);
  });

});
