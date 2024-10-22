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
const modal = document.querySelector(".buy-now-modal");

openButton.addEventListener("click", function () {
  document.querySelector(".buy-now-modal").style.display = "block";
});

document.addEventListener("click", function (event) {
  const isClickInside =
    modal.contains(event.target) || openButton.contains(event.target);

  if (!isClickInside) {
    modal.style.display = "none"; // Close the popup
  }
});
