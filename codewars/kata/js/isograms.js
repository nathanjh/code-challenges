exports.isIsogram = function (str) {
  str = str.toLowerCase();
  var memString = '';
  for (var i = 0; i < str.length; i++) {
    if (memString.includes(str[i])) {
      return false;
    } else {
      memString += str[i];
    }
  }

  return true;
};
