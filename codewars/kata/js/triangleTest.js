exports.triangleType = function (a, b, c) {
  tri = [a, b, c].sort(function (a, b) {
    return a - b;
  });

  if ((tri[1] - tri[0]) < tri[2] && tri[2] < (tri[1] + tri[0])) {
    if (((tri[0] * tri[0]) + (tri[1] * tri[1])) === (tri[2] * tri[2])) {
      return 2;
    } else if ((tri[2] * tri[2]) > ((tri[0] * tri[0]) + (tri[1] * tri[1]))) { return 3;
    } else {
      return 1; }
  } else {
    return 0;
  }
};
