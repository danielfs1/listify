'use strict';

describe('Service: List', function () {

  // load the service's module
  beforeEach(module('listifyApp'));

  // instantiate service
  var List;
  beforeEach(inject(function (_List_) {
    List = _List_;
  }));

  it('should do something', function () {
    expect(!!List).toBe(true);
  });

});
