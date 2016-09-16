var exportFunction = require('../max_in_array');
var expect = require('chai').expect;

describe('largestOf', function () {
  it('it returns [27, 5, 39, 1001] for [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]', function () {
    var array = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]];
    var largestArray = [27, 5, 39, 1001];
    expect(exportFunction.largestOf(array).to.equal(largestArray));
  });
});
