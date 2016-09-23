var exportFunction = require('../chunky');
var expect = require('chai').expect;

describe('chunkArrayInGroups', function () {
  it('it returns [["a", "b"], ["c", "d"]] for array = ["a", "b", "c", "d"], size = 2', function () {
    var array = ["a", "b", "c", "d"];
    expect(
      exportFunction.chunkArrayInGroups(array, 2)).to.deep.equal([["a", "b"], ["c", "d"]]);
  });

  it('it returns [[0, 1, 2], [3, 4, 5], [6]] for array = [0, 1, 2, 3, 4, 5, 6], size = 3', function () {
    var array = [0, 1, 2, 3, 4, 5, 6];
    expect(exportFunction.chunkArrayInGroups(array, 3)).to.deep.equal([[0, 1, 2], [3, 4, 5], [6]]);
  });
});
