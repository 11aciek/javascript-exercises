const palindromes = function (word) {
  const punctation = [".", "!", "?", ";", ",", ":", " ", "'"];
  const test = word.toLowerCase().split("")
				.filter(character => !punctation.includes(character))
				.join("");
  return test == test.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
