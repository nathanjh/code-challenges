exports.isPalindrome = function (str) {
  var re = /[\W_]/g;
  var strForwards = str.replace(re, '').toLowerCase();
  var strBackwards = '';
  for (var i = strForwards.length - 1; i >= 0; i--) {
    strBackwards += strForwards[i];
  }

  if (strForwards === strBackwards) {
    return true;
  } else {
    return false;
  }
};
