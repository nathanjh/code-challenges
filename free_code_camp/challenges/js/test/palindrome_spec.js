var exportFunction = require('../palindrome.js');
var expect = require('chai').expect;

describe('isPalindrome', function () {
  it('it returns true for "race car"', function () {
    var str = 'race car';
    expect(exportFunction.isPalindrome(str)).to.equal(true);
  });
});

describe('isPalindrome', function () {
  it('it returns true for "0_0 (: /-\ :) 0-0"', function () {
    var str = '0_0 (: /-\ :) 0-0';
    expect(exportFunction.isPalindrome(str)).to.equal(true);
  });
});

describe('isPalindrome', function () {
  it('it returns false for "five|\_/|four"', function () {
    var str = 'five|\_/|four';
    expect(exportFunction.isPalindrome(str)).to.equal(false);
  });
});

describe('isPalindrome', function () {
  it('it returns true for "A man, a plan, a canal. Panama"', function () {
    var str = 'A man, a plan, a canal. Panama';
    expect(exportFunction.isPalindrome(str)).to.equal(true);
  });
});
