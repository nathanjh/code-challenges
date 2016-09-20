var exportFunction = require('../triangleTest');
var expect = require('chai').expect;

describe('triangleType', function () {
  it('can validate a right triangle', function () {
    expect(exportFunction.triangleType(3, 4, 5)).to.equal(2);
  });
});

describe('triangleType', function () {
  it('can validate an obtuse triangle', function () {
    expect(exportFunction.triangleType(7, 12, 8)).to.equal(3);
  });
});

describe('triangleType', function () {
  it('can validate an acute triangle', function () {
    expect(exportFunction.triangleType(7, 5, 8)).to.equal(1);
  });
});

describe('triangleType', function () {
  it('can validate a triangle', function () {
    expect(exportFunction.triangleType(4, 2, 6)).to.equal(0);
  });
});
