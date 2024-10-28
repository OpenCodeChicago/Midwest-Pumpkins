// Function to show SweetAlert notification
function showNotification(message) {
  Swal.fire({
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 2000,
  });
}

// Event listeners for modal
document
  .getElementById("reviewForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    showNotification("Thank you for your review!");
    document.getElementById("review-modal").classList.add("hidden"); // Hide modal on submit
  });

const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.getElementById("close-modal");
const reviewModal = document.getElementById("review-modal");

openModalButton.addEventListener("click", () => {
  reviewModal.classList.remove("hidden"); // Show modal
});

closeModalButton.addEventListener("click", () => {
  reviewModal.classList.add("hidden"); // Hide modal
});

window.addEventListener("click", (event) => {
  if (event.target === reviewModal) {
    reviewModal.classList.add("hidden"); // Hide modal when clicking outside
  }
});
