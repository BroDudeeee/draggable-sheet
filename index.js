const openSheetBtn = document.querySelector(".openSheetBtn");
const draggableSheet = document.querySelector(".draggableSheet");
const closeSheetBtn = document.querySelector(".dark");
const dragBtn = document.querySelector(".dragBtn");

openSheetBtn.addEventListener("click", () => {
  draggableSheet.style.top = "400px";
  draggableSheet.style.display = "block";
  closeSheetBtn.style.display = "block";
});

closeSheetBtn.addEventListener("click", () => {
  draggableSheet.style.display = "none";
  closeSheetBtn.style.display = "none";
});

let offsetY;

draggableSheet.addEventListener("mousedown", function (event) {
  offsetY = event.clientY - this.getBoundingClientRect().top;
  document.addEventListener("mousemove", dragMove);
  document.addEventListener("mouseup", dragEnd);
});

const dragMove = (event) => {
  let y = event.clientY - offsetY;

  y = Math.max(y, 0);

  draggableSheet.style.top = y + "px";
};

// Function to handle releasing the draggable item
const dragEnd = () => {
  // Remove the mousemove and mouseup event listeners
  document.removeEventListener("mousemove", dragMove);
  document.removeEventListener("mouseup", dragEnd);
};
