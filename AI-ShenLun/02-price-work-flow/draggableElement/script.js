const draggableElement = document.getElementById("draggableElement");
let isDragging = false;
let startX, startY;

draggableElement.addEventListener("mousedown", (event) => {
  isDragging = true;
  startX = event.clientX;
  startY = event.clientY;
});

document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const offsetX = event.clientX - startX;
    const offsetY = event.clientY - startY;

    draggableElement.style.left = `${offsetX}px`;
    draggableElement.style.top = `${offsetY}px`;

    // Add any additional logic for updating the element's position
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
