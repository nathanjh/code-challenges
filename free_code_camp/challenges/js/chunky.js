exports.chunkArrayInGroups = function (arr, num) {
  var outerArray = [];
  // var innerArray = [];
  var start = 0;
  var end = num;
  // var condition = arr.length % num === 0 ? num : num + 1;
  for (var i = 0; i < num; i++) {
    outerArray.push(arr.slice(start, end));
    start += num;
    end += num;
  }

  return outerArray;
};
