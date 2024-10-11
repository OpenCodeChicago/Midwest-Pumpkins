// Get the button element
const scrollUpBtn = document.getElementById('scrollUpBtn');

// Show the button after scrolling 200px down
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollUpBtn.style.display = 'block'; // Show the button
    } else {
        scrollUpBtn.style.display = 'none'; // Hide the button
    }
};

// Scroll to the top smoothly when the button is clicked
scrollUpBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling
    });
};
