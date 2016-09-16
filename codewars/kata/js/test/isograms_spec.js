var exportFunction = require('../isograms');
var expect = require('chai').expect;

describe('isIsogram', function () {
  it('returns true for "Dermatoglyphics"', function () {
    expect(exportFunction.isIsogram('Dermatoglyphics')).to.equal(true);
  });
});
