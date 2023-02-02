const modal = document.querySelector(".modal"),
  btn = document.querySelector(".btn"),
  close = document.querySelector(".close");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("oi");
  openModal();
});

modal.addEventListener("click", (e) => {
  const modalContent = e.target.classList;
  if (modalContent.contains("modal") || modalContent.contains("close")) {
    closeModal();
  }
});

// OPEN MODAL
function openModal() {
  modal.style.display = "block";
}

// CLOSE MODAL
function closeModal() {
  modal.style.display = "none";
}
