exports.min = function min(array) {
  if (array === undefined || array.length == 0) return 0;
    const sorted = array.sort((a, b) => a - b);
    return sorted.reverse().pop();
};

exports.max = function max(array) {
  if (array === undefined || array.length == 0) return 0;
  const sorted = array.sort((a, b) => a - b);
  return sorted.pop();
};

exports.avg = function avg(array) {
  if (array === undefined || array.length == 0) return 0;
  const sorted = array.sort((a, b) => a - b);
  const sum = sorted.reduce((acc, item) => acc + item);
  return sum / array.length;
};




