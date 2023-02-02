const modal = document.querySelector(".modal-content"),
  btn = document.querySelector(".btn"),
  close = document.querySelector(".close");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("oi");
  openModal();
});

// close.addEventListener("click", () => {
//   closeModal();
// });

modal.addEventListener("click", () => {
  closeModal();
  console.log("Teste");
});

// OPEN MODAL
function openModal() {
  modal.style.display = "block";
}

// CLOSE MODAL
function closeModal() {
  modal.style.display = "none";
}
