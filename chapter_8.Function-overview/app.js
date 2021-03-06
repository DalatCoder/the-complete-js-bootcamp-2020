// isValidPassword function
// // Password must:
// - be at least 8 characters
//   - cannot contain any spaces
// - cannot contain username

function isValidPassword(password, username) {
  if (password.length < 8) return false;
  if (password.includes(username)) return false;
  if (password.includes(" ")) return false;

  return true;
}

document
  .querySelector("input[type='submit']")
  .addEventListener("click", (e) => {
    e.preventDefault();

    const password = document.querySelector('input[type="password"]').value;
    const username = document.querySelector('input[type="text"]').value;

    if (!isValidPassword(password, username)) {
      alert("Invalid password!");
    }
  });

function calcAverage(numbers) {
  let sum = 0;
  for (let num of numbers) sum += num;
  return sum / numbers.length;
}

function isPangram(sentence) {
  let str = sentence.toLowerCase();
  for (let char of "abcdefghijklmnopqrstuvwxyz") {
    if (!str.includes(char)) return false;
  }

  return true;
}

function pickRandomItem(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCard() {
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suits = ["clubs", "spades", "hearts", "diamonds"];

  const value = pickRandomItem(values);
  const suit = pickRandomItem(suits);

  return { value, suit };
}
