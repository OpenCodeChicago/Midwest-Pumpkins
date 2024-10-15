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
