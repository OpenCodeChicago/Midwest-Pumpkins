// Function to show SweetAlert notification
function showNotification(message) {
  Swal.fire({
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 2000,
  });
}

document.getElementById("buyForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form
  showNotification("Your order has been successfully placed!");
});

// js for buy-now modal open/close

// Get the popup and the button that opens it
const openButton = document.getElementById("buyNowButton");
const modal = document.querySelector(".modal-container");
const closeModalButton = document.querySelector(".close-button");

openButton.addEventListener("click", function () {
  document.querySelector(".modal-container").style.display = "flex";
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
