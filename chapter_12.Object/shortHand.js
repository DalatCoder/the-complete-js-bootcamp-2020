const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = arr.reduce((sum, val) => {
    return sum + val;
  }, 0);
  const avg = sum / arr.length;

  return { max, min, sum, avg };
};

const reviews = [4.5, 5.0, 3.44, 2.8, 2.5, 4.0, 3.5];

const stats = getStats(reviews);
console.log(stats);
