exports.chunkArrayInGroups = function (arr, size) {
  var outerArray = [];
  var start = 0;
  var end = size;
  var times = arr.length / size;
  for (var i = 0; i < times; i++) {
    outerArray.push(arr.slice(start, end));
    start += size;
    end += size;
  }

  return outerArray;
};
