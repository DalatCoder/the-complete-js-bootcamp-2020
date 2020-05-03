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
