
window.addEventListener('DOMContentLoaded', () => {
    // Get the modal
    var modal = document.getElementById("subscribeModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
    modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
});

// Function to show SweetAlert notification
function showNotification(message) {
    Swal.fire({
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 2000
    });
  }
  
document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form
    showNotification('Thank you for subscribing! Stay tuned for updates!');
  });
