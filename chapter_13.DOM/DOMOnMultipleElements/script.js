const colors = [
  "lightsalmon",
  "salmon",
  "darksalmon",
  "lightcoral",
  "indianred",
  "crimson",
  "firebrick",
];

const container = document.querySelector(".row");
const title = document.querySelector("h1");

function changeTitleColor() {
  // This refers to the current element which invoked event
  title.style.color = this.style.backgroundColor;
}

for (const color of colors) {
  const box = document.createElement("div");
  box.classList.add("box");
  box.style.backgroundColor = color;
  box.innerText = color;
  container.appendChild(box);

  box.addEventListener("mouseover", changeTitleColor);
}
