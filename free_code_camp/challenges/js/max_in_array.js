/*jshint esversion: 6 */

exports.largestOf = function (array) {
  var biggestArray = [];
  for (var i = 0; i < array.length; i++) {
    var max = Math.max(...array[i]);
    biggestArray.push(max);
  }

  return biggestArray;
};
