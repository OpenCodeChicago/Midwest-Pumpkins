document.addEventListener("DOMContentLoaded", function() {
   
    const cards = document.querySelectorAll('.card');
    const dots = document.querySelectorAll('.dot');
    const maxLength = 50; // Define the maximum length for a short description
    let cardsPerPage = 3; 
    let currentPage = 0; 
    let autoSliderInterval;

    // Function to determine cards per page based on screen size
    function updateCardsPerPage() {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1024) { // Laptop or larger
            cardsPerPage = 3;
        } else if (screenWidth >= 768) { // Tablet
            cardsPerPage = 2;
        } else { // Phone
            cardsPerPage = 1;
        }
        currentPage = 0; // Reset to the first page when resizing
        displayCards();
        resetAutoSlider(); // Restart the auto slider when the screen resizes
    }

    // Filter and hide cards based on content length
    cards.forEach((card, index) => {
        const description = card.querySelector('p').innerText;
        if (description.length < maxLength) {
            card.style.display = 'none'; // Hide card if the description is short
        } else {
            card.style.display = 'none'; // Initially hide all cards
        }
    });

    function displayCards() {
        const start = currentPage * cardsPerPage;
        const end = start + cardsPerPage;

        // Show only the cards for the current page
        cards.forEach((card, index) => {
            if (index >= start && index < end) {
                card.style.display = 'block'; // Show card
            } else {
                card.style.display = 'none'; // Hide card
            }
        });

        // Update active dot
        updateDots();
    }

    function updateDots() {
        // Reset all dots to inactive
        dots.forEach(dot => dot.classList.remove('active'));

        // Set the corresponding dot as active based on the current page
        if (currentPage < dots.length) {
            dots[currentPage].classList.add('active');
        }
    }

    // Navigation button event listeners
    document.getElementById('prevBtn').addEventListener('click', function() {
        if (currentPage > 0) {
            currentPage--; 
            displayCards(); 
            resetAutoSlider(); // Restart the auto slider when manually navigating
        }
    });

    document.getElementById('nextBtn').addEventListener('click', function() {
        if ((currentPage + 1) * cardsPerPage < cards.length) {
            currentPage++; 
            displayCards(); 
            resetAutoSlider(); // Restart the auto slider when manually navigating
        }
    });

    // Automatic slider function
    function startAutoSlider() {
        autoSliderInterval = setInterval(() => {
            if ((currentPage + 1) * cardsPerPage < cards.length) {
                currentPage++; // Move to the next page
            } else {
                currentPage = 0; // Go back to the first page if on the last
            }
            displayCards(); 
        }, 4000); // 4 seconds interval
    }

    // Stop and restart the automatic slider when the user manually navigates
    function resetAutoSlider() {
        clearInterval(autoSliderInterval); // Stop the current interval
        startAutoSlider(); // Start it again
    }

    // Update cards per page on load and when window is resized
    window.addEventListener('resize', updateCardsPerPage);
    updateCardsPerPage(); // Initial setting based on current screen size

    // Start the automatic slider
    startAutoSlider();

});
