// Function to show SweetAlert notification
function showNotification(message) {
    Swal.fire({
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 2000
    });
  }
  
  document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form
    showNotification('Thank you for your review! We appreciate your feedback!');
  });
  