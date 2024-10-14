// Function to show SweetAlert notification
function showNotification(message) {
    Swal.fire({
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 2000
    });
  }
  
  document.getElementById('buyNowForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form 
    showNotification('Your order has been successfully placed!');
  });