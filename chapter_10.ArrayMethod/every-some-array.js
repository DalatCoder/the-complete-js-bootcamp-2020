const words = ["dog", "dig", "log", "bag", "wag"];

const isAll3Letters = words.every((w) => w.length === 3);
if (isAll3Letters) {
  console.log(`All words in '${words.join(", ")}' have 3 letters.`);
} else {
  console.log(`All words in '${words.join(", ")}' doesn't have 3 letters.`);
}

const isAllEendWithG = words.every((w) => w.endsWith("g"));
if (isAllEendWithG) {
  console.log(`All words in '${words.join(", ")}' end with 'G'.`);
} else {
  console.log(`All words in '${words.join(", ")}' doesn't end with 'G'.`);
}

// Some
const haveAnyWordStartWithD = words.some((w) => w.startsWith("d"));
if (haveAnyWordStartWithD) {
  console.log('There are at least 1 word starts with "d"');
} else {
  console.log('There aren"t word starts with "d"');
}

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

const isAllGoodBook = books.every((b) => b.rating >= 3.5);
if (isAllGoodBook) {
  console.log("All book have the rating over than 3.5");
}

const isAnyFiction = books.some((b) => b.genres.includes("fiction"));
if (isAnyFiction) {
  console.log("There is fiction book");
}

const any2Authors = books.some((b) => b.authors.length >= 2);
if (any2Authors) {
  console.log("There is a book with at least 2 authors");
}
