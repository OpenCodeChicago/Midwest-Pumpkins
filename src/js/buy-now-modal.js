// Function to show SweetAlert notification
function showNotification(message) {
  Swal.fire({
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 2000,
  });
}

// js for buy-now modal open/close

// Get the popup and the button that opens it
const openButton = document.getElementById("buyNowButton");
const openTopSellerButton = document.getElementById("topSellersBuyNowButton");
const modal = document.querySelector(".modal-container");
const closeModalButton = document.querySelector(".close-button");
const buyForm = document.getElementById("buyForm");

openButton.addEventListener("click", function () {
  modal.style.display = "flex";
});

openTopSellerButton.addEventListener("click", function () {
  modal.style.display = "flex";
});

function closeModal() {
  modal.style.display = "none";
}

if (closeModalButton) {
  closeModalButton.addEventListener("click", closeModal);
}

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    closeModal();
  }
});

buyForm.addEventListener("submit", function (event) {
  event.preventDefault();
  showNotification("Your order has been successfully placed!");
  closeModal();
  buyForm.reset();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
