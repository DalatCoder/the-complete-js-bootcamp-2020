const btn = document.querySelector("button");

btn.style.transition = "all .5s";

// setTimeout(() => {
//   btn.style.transform = "translateX(100px)";

//   setTimeout(() => {
//     btn.style.transform = "translateX(200px)";

//     setTimeout(() => {
//       btn.style.transform = "translateX(300px)";
//     }, 3000);
//   }, 2000);
// }, 1000);

const moveX = (element, amount, delay, callback) => {
  setTimeout(() => {
    element.style.transform = `translateX(${amount}px)`;
    if (callback) callback();
  }, delay);
};

moveX(btn, 100, 1000, () => {
  moveX(btn, 200, 1000, () => {
    moveX(btn, 300, 1000);
  });
});
