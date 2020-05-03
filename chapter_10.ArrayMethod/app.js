const arr = [2, 3, 4, 6, 9, 8, 7];

function forEach(callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
  }
}

forEach(function (value, index) {
  console.log(`${index}: ${value}`);
});

arr.forEach((value, index) => {
  console.log(`${index}: ${value}`);
});

const printTriple = (n) => console.log(n * 3);
arr.forEach(printTriple);

let sum = 0;
arr.forEach(function (value) {
  sum += value;
});

console.log(`Sum: ${sum}`);
