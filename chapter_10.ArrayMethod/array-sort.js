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

const asc_ratingBooks = books.slice().sort((a, b) => a.rating - b.rating);
console.log("Ascending books by rating:");
for (const book of asc_ratingBooks) {
  console.log(`${book.title}: ${book.rating}`);
}

const des_ratingBooks = books.slice().sort((a, b) => b.rating - a.rating);
console.log("Descending books by rating:");
for (const book of des_ratingBooks) {
  console.log(`${book.title}: ${book.rating}`);
}
