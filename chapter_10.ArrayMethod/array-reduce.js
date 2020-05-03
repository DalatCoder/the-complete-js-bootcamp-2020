const array = [3, 4, 5, 6, 7];
const sum = array.reduce((total, curVal) => total + curVal);
console.log(`Sum: ${sum}`);

const grades = [50, 89, 95, 45, 70, 66, 80, 92, 83];
const maxGrade = grades.reduce((max, curVal) => {
  // if (curVal > max) return curVal;
  // return max;

  return Math.max(max, curVal);
});
console.log(`Max: ${maxGrade}`);

const minGrade = grades.reduce((min, curVal) => Math.min(min, curVal));
console.log(`Min: ${minGrade}`);

// Passing initial value for accumulator
// array.reduce(callback, initValue);
const total = [10, 20, 30, 40, 50].reduce((total, curVal) => {
  return total + curVal;
}, 0);
console.log(`Total: ${total}`);

// prettier-ignore
const votes = ["absent","y", "y", "n", "y", "n", "n", "y", "y", "y", "n", "y", "n", "y"];
const results = votes.reduce((tally, val) => {
  // if (tally[val]) tally[val]++;
  // else {
  //   tally[val] = 1;
  // }

  // tally[val] ? tally[val]++ : (tally[val] = 1);

  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});
console.log(results);
