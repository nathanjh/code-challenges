var exportFunction = require('../palindrome.js');
var expect = require('chai').expect;

describe('isPalindrome', function () {
  it('it returns true for "race car"', function () {
    var str = 'race car';
    expect(exportFunction.isPalindrome(str)).to.equal(true);
  });
});
