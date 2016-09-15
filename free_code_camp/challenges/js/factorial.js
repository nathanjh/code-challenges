exports.factorialize = function (n) {
  if (n === 0) {
    return 1;
  } else {
    factorRange = [];
    for (var i = n; i > 0; i--) {
      factorRange.push(i);
    }

    return factorRange.reduce(function (a, b) {
      return a * b;
    });
  }
};
