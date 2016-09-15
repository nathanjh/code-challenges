exports.longestWord = function (str) {
  var words = str.split(' ').map(function (word) {
    return word.length;
  });

  //to practice using Array.prototype.reduce;
  var longest = words.reduce(function (a, b) {
    if (a > b) return a;
    else return b;
  });

  return longest;
};
