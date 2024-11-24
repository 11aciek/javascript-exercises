const fibonacci = function(limit) {
  if (limit < 0) return "OOPS";
  let a = 0;
  let b = 1;
  while (limit > 0) {
	[a, b] = [b, a + b];
	limit--;
  }
  return a;
};

// Do not edit below this line
module.exports = fibonacci;
