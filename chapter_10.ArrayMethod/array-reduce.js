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

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "A Truly Horrible Book",
    authors: ["Xavier Time"],
    rating: 2.18,
    genres: ["fiction", "garbage"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];
// Group books by ratings
const ratingGroup = books.reduce((group, book) => {
  const key = Math.floor(book.rating);

  if (!group[key]) {
    group[key] = [];
  }

  group[key].push({ title: book.title, rating: book.rating });

  return group;
}, {});

console.log(ratingGroup);

const genreGroup = books.reduce((groupedBook, book) => {
  for (let genre of book.genres) {
    if (!groupedBook[genre]) groupedBook[genre] = [];
    groupedBook[genre].push({ title: book.title, genre });
  }
  return groupedBook;
}, {});
console.log(genreGroup);
