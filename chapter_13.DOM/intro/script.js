console.log("Hello world!");

const deleteButtons = document.querySelectorAll(".btn-delete");

deleteButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const li = e.target.parentElement;
    li.classList.add("done");
  });
});

const undoButtons = document.querySelectorAll(".btn-undo");
undoButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const li = e.target.parentElement;
    li.classList.remove("done");
  });
});
