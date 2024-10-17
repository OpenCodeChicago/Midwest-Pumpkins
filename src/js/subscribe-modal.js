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