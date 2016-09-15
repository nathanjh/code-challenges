var exportFunction = require('../rev_string.js');
var expect = require('chai').expect;

describe('reverseString', function () {
  it('it returns "olleh" for "hello"', function () {
    var str = 'hello';
    expect(exportFunction.reverseString(str)).to.equal('olleh');
  });
});
