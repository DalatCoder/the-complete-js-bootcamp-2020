const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", (e) => {
  const x = Math.floor(Math.random() * window.innerWidth) - 100;
  const y = Math.floor(Math.random() * window.innerHeight) - 200;

  btn.style.transform = `translate(${x}px, ${y}px)`;
});

btn.addEventListener("click", (e) => {
  e.target.innerText = "You got me!";
  document.body.style.backgroundColor = "orangered";

  btn.addEventListener("mouseout", () => {
    e.target.innerText = "Catch me if you can!";
    document.body.style.backgroundColor = "transparent";
  });
});
