const MyMath = {
  PI: 3.14,
  add: function (x, y) {
    return x + y;
  },
  mutilply: function (x, y) {
    return x * y;
  },
  // Get a random number between [lower, upper]
  random: function (lower, upper) {
    if (!lower || !upper) throw new Error("Please provide valid arguments!");

    upper += 1;
    return Math.floor(Math.random() * (upper - lower)) + lower;
  },
};

console.log(MyMath.add(1, 2));
console.log(MyMath.PI);

console.log(MyMath.random(8, 10));
