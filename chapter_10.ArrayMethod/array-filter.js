let array = [9, 8, 7, 6, 5, 4, 3, 2, 1];

function Filter(test) {
  const result = [];
  for (let i = 0; i < array.length; i++)
    if (test(array[i])) {
      result.push(array[i]);
    }

  return result;
}

const greaterThanFives = Filter((num) => num > 5);
console.log(greaterThanFives);

const odds = Filter((num) => num % 2 != 0);
console.log(odds);

const evens = array.filter((n) => n % 2 == 0);
console.log(evens);

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

// Find all books with rating over than 4.3
const goodBooks = books.filter((b) => b.rating >= 4.3);
for (const book of goodBooks) {
  console.log(`${book.title}: ${book.rating}`);
}

// Find all fantasy books
const fantasyBooks = books.filter((b) => b.genres.includes("fantasy"));

console.log("All fantasy books:");
for (const book of fantasyBooks) {
  console.log(`${book.title}: ${book.rating}, ${book.genres}`);
}

// Find all books with the given query
const query = "the";
const queryBooks = books.filter((b) =>
  b.title.toLowerCase().includes(query.toLowerCase())
);
console.log("All books match the query: " + query);
for (const book of queryBooks) {
  console.log(`${book.title}: ${book.rating}, ${book.genres}`);
}
