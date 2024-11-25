const findTheOldest = function(people) {
  const currYear = new Date().getFullYear();
  return people.reduce((oldest, next) => 
	((next.yearOfDeath || currYear) - next.yearOfBirth) > ((oldest.yearOfDeath || currYear) - oldest.yearOfBirth) ?
	next : oldest);
}

// Do not edit below this line
module.exports = findTheOldest;
