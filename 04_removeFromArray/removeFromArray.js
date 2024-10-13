const removeFromArray = function(arr, ...args) {
  let result = arr;
  for (const arg of args) {
	result = result.filter(x => x !== arg);
  }
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
