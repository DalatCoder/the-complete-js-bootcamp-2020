let movies = [
  "The fantasy Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds",
];

// Return the first movie that match the criteria
const movie = movies.find((movie) => movie.includes("Mrs."));
console.log(movie);

// Find the movie begin with "Mrs."
const movie2 = movies.find((movie) => movie.indexOf("Mrs.") === 0);
console.log(movie2);

const books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];

// Find the book that have the rating over 4.3
const goodBook = books.find((book) => book.rating >= 4.3);
console.log(
  `The first book with rating over 4.3: ${goodBook.title} with rating of ${goodBook.rating}`
);

// Find the first book that Neil Gaiman is an author
const neilBook = books.find((b) => b.authors.includes("Neil Gaiman"));
console.log(neilBook.title, neilBook.rating, neilBook.authors);
