document.addEventListener("DOMContentLoaded", () => {
  // Get the modal
  const modal = document.getElementById("subscribeModal");

  // Get the button that opens the modal
  const btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  const closeBtn = document.getElementById("close-subscribe-modal"); // Changed to select by ID

  // When the user clicks the button, open the modal
  btn.addEventListener("click", () => {
    modal.classList.add("show");
    console.log("Modal opened");
  });

  // When the user clicks on <span> (x), close the modal
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show"); // Close modal by removing 'show' class
    console.log("Modal closed via X button");
  });

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.remove("show");
    }
  };

  // Handle form submission
  document
    .getElementById("subscribeForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      
      Swal.fire({
        icon: "success",
        title: "Thank you for subscribing! Stay tuned for updates!",
        showConfirmButton: false,
        timer: 2000,
      });
      modal.classList.remove("show"); // Close the modal after submission
    });

  //KeyCode Listener for escape close
  document.addEventListener("keydown", keyCode);
});

function keyCode(event) {
  const modal = document.getElementById("close-subscribe-modal");
  const x = event.keyCode;
  if (x == 27) {
    modal.style.display = "none";
  }
}
