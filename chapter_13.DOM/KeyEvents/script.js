const input = document.querySelector("#item");
const list = document.querySelector(".foods");

input.addEventListener("keypress", function (e) {
  if (e.key !== "Enter") return;
  if (!this.value) return;

  const food = document.createElement("li");
  food.innerText = this.value;
  list.appendChild(food);
  this.value = "";
});
