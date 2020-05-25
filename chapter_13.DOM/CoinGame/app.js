function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const player = document.querySelector("#player");
const coin = document.querySelector("#coin");
const scoreBox = document.querySelector("#score");
let score = 0;

scoreBox.innerText = score;

window.addEventListener("keyup", function (e) {
  if (e.key === "ArrowDown" || e.key === "Down") {
    let top = extractPosition(player.style.top);
    player.style.top = `${top + 50}px`;
  } else if (e.key === "ArrowUp" || e.key === "Up") {
    let top = extractPosition(player.style.top);
    player.style.top = `${top - 50}px`;
  } else if (e.key === "ArrowLeft" || e.key === "Left") {
    let left = extractPosition(player.style.left);
    player.style.left = `${left - 50}px`;
    player.style.transform = "rotateY(180deg)";
  } else if (e.key === "ArrowRight" || e.key === "Right") {
    let left = extractPosition(player.style.left);
    player.style.left = `${left + 50}px`;
    player.style.transform = "rotateY(0)";
  }

  if (isTouching(player, coin)) {
    moveCoin();
    score += 10;
    scoreBox.innerText = score;
  }
});

const extractPosition = (pos) => {
  if (!pos) return 10; // Initial value in CSS
  return pos.replace("px", "") * 1;
};

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);

  if (x + 50 >= window.innerWidth) x = x - 50;
  if (y + 50 >= window.innerHeight) y = y - 50;

  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};

moveCoin();
