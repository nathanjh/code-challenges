var exportFunction = require('../title_case');
var expect = require('chai').expect;

describe('titleCase', function () {
  it('it returns "Short And Stout" for "sHoRt AnD sToUt"', function () {
    var str = 'sHoRt AnD sToUt';
    var newStr = 'Short And Stout';
    expect(exportFunction.titleCase(str)).to.equal(newStr);
  });
});

describe('titleCase', function () {
  it('it returns "I\'m A Little Tea Pot" for I\'m a little tea pot"', function () {
    var str = "I'm a little tea pot";
    var newStr = "I'm A Little Tea Pot";
    expect(exportFunction.titleCase(str)).to.equal(newStr);
  });
});
