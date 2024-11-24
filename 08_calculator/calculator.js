const add = function(...nums) {
	return nums.reduce((sum, next) => sum + next, 0);
};

const subtract = function(...nums) {
	return nums.reduce((total, next) => total - next);
};

const sum = function(arr) {
	return arr.reduce((total, next) => total + next,0);
};

const multiply = function(arr) {
  return arr.reduce((total, next) => total * next);
};

const power = function(a,b) {
  	return a**b;
};

const factorial = function(num) {
  let total = 1;
  for (let i = 1; i <= num; i++) {
	total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
