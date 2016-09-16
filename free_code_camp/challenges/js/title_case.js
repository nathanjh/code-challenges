exports.titleCase = function (str) {
  var words = str.toLowerCase().split(' ').map(function (word) {
    return word[0].toUpperCase() + word.slice(1);
  });

  var newStr = words.join(' ');
  return newStr;
};
