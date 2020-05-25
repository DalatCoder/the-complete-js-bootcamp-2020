const form = document.querySelector("#signup-form");
const creditCard = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");

const formData = {};

for (let input of [creditCard, termsCheckbox, veggieSelect]) {
  input.addEventListener("input", ({ target }) => {
    const { name, type, value, checked } = target;
    formData[name] = type === "checkbox" ? checked : value;

    console.log(formData);
  });
}

// creditCard.addEventListener("input", (e) => {
//   formData["cc"] = e.target.value;
//   console.log(formData);
// });

// veggieSelect.addEventListener("input", (e) => {
//   formData["veggie"] = e.target.value;
//   console.log(formData);
// });

// termsCheckbox.addEventListener("input", (e) => {
//   formData["agreeToTerms"] = e.target.checked;
//   console.log(formData);
// });
