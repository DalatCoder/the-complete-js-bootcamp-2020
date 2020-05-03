const array = [1, 4, 3, 2, 6, 8, 9, 7, 5];

const swap = (a, b) => {
  let t = a;
  a = b;
  b = t;
};

function sort(fn_compare) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (fn_compare(array[i], array[j])) {
        let t = array[i];
        array[i] = array[j];
        array[j] = t;
      }
    }
  }
}

console.log(`Original array: ${array.join(", ")}`);
sort((a, b) => a > b);
console.log(`Ascending array: ${array.join(", ")}`);
sort((a, b) => a < b);
console.log(`Descending array: ${array.join(", ")}`);

// Sort mutate original array, so before sort, we call slice to make a copy
// a - b is greater than 0, so sort b before a
const sort_ascending = array.slice().sort((a, b) => a - b);
console.log(sort_ascending);

// a - b is less than 0, so sort b before a
const sort_descending = array.slice().sort((a, b) => b - a);
console.log(sort_descending);

// Default sort: sort by ascii
const badSort = array.slice().sort();
console.log(badSort);
