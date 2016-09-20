var exportFunction = require('../triangleTest');
var expect = require('chai').expect;

describe('triangleType', function () {
  it('can validate a triangle', function () {
    expect(exportFunction.triangleType(3, 4, 5)).to.equal(true);
  });
});
