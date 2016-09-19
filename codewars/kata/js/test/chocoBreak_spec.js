var exportFunction = require('../chocoBreak');
var expect = require('chai').expect;

describe('breakChocolate', function () {
  it('returns 24 for (5, 5)', function () {
    expect(exportFunction.breakChocolate(5, 5)).to.equal(24);
  });
});

describe('breakChocolate', function () {
  it('returns 0 for (1, 1)', function () {
    expect(exportFunction.breakChocolate(1, 1)).to.equal(0);
  });
});

describe('breakChocolate', function () {
  it('it returns 2 for (1, 3)', function () {
    expect(exportFunction.breakChocolate(1, 3)).to.equal(2);
  });
});
