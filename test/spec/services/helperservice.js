'use strict';

describe('Service: Helperservice', function () {

  // load the service's module
  beforeEach(module('listifyApp'));

  // instantiate service
  var Helperservice;
  beforeEach(inject(function (_Helperservice_) {
    Helperservice = _Helperservice_;
  }));

  it('should do something', function () {
    expect(!!Helperservice).toBe(true);
  });

});
