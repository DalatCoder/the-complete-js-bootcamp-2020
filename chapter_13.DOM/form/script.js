const form = document.querySelector("#signup-form");
const creditCard = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);

  console.log(creditCard.value);
  console.log(termsCheckbox.checked);
  console.log(veggieSelect.value);
});
