var exportFunction = require('../longest_word.js');
var expect = require('chai').expect;

describe('longestWord', function () {
  it('it returns 8 for "What is the average airspeed velocity of an unladen swallow"', function () {
    var str = 'What is the average airspeed velocity of an unladen swallow';
    expect(exportFunction.longestWord(str)).to.equal(8);
  });
});

describe('longestWord', function () {
  it('it returns 6 for "Google do a barrel roll"', function () {
    var str = 'Google do a barrel roll';
    expect(exportFunction.longestWord(str)).to.equal(6);
  });
});
