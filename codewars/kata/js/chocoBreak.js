exports.breakChocolate = function (n, m) {
  if (n < 1 || m < 1) {
    return 0;
  } else {
    return (m * n) - 1;
  }
};
