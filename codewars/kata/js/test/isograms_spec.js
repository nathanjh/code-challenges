var exportFunction = require('../isograms');
var expect = require('chai').expect;

describe('isIsogram', function () {
  it('returns true for "Dermatoglyphics"', function () {
    expect(exportFunction.isIsogram('Dermatoglyphics')).to.equal(true);
  });
});

describe('isIsogram', function () {
  it('returns false for "aba"', function () {
    expect(exportFunction.isIsogram('aba')).to.equal(false);
  });
});

describe('isIsogram', function () {
  it('returns false for "isIsogram"', function () {
    expect(exportFunction.isIsogram('isIsogram')).to.equal(false);
  });
});

describe('isIsogram', function () {
  it('returns true for ""', function () {
    expect(exportFunction.isIsogram('')).to.equal(true);
  });
});
