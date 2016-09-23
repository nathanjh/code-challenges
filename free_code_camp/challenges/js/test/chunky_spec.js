var exportFunction = require('../chunky');
var expect = require('chai').expect;

describe('chunkArrayInGroups', function () {
  it('it returns [["a", "b"], ["c", "d"]] for array = ["a", "b", "c", "d"], size = 2', function () {
    var array = ["a", "b", "c", "d"];
    expect(
      exportFunction.chunkArrayInGroups(array, 2)).to.deep.equal([["a", "b"], ["c", "d"]]);
  });
});
