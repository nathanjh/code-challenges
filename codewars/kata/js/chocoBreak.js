exports.breakChocolate = function (n, m) {
  var breaks = 0;
  var dim = [n, m].sort(function (a, b) {
    return a - b;
  });

  breaks += (dim[0] * (dim[0] - 1)) + (dim[1] - 1);
  return breaks;
};
