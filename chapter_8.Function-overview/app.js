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
