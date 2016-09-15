var exportFunction = require('../factorial.js');
var expect = require('chai').expect;

describe('factorialize', function () {
  it('it returns 120 for 5', function () {
    expect(exportFunction.factorialize(5)).to.equal(120);
  });
});

describe('factorialize', function () {
  it('it returns 1 for 0', function () {
    expect(exportFunction.factorialize(0)).to.equal(1);
  });
});
