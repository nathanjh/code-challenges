var exportFunction = require('../rev_string.js');
var expect = require('chai').expect;

describe('reverseString', function () {
  it('it returns "olleh" for "hello"', function () {
    var str = 'hello';
    expect(exportFunction.reverseString(str)).to.equal('olleh');
  });
});

describe('reverseString', function () {
  it('it returns "htraE morf sgniteerG" for "Greetings from Earth"', function () {
    var str = 'Greetings from Earth';
    expect(exportFunction.reverseString(str)).to.equal('htraE morf sgniteerG');
  });
});
