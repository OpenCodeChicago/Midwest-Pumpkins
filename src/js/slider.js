document.addEventListener("DOMContentLoaded", function () {
  const cardContainer = document.querySelector(".card-container");
  const dots = document.querySelectorAll(".dot");
  let currentSlide = 0;
  const totalSlides = dots.length;

  // Function to calculate slide width based on screen size
  function getSlideWidth() {
    if (window.innerWidth <= 767) {
      return 100 / 12; // Mobile: 1 card per view
    } else if (window.innerWidth <= 1023) {
      return 100 / 6; // Tablet: 2 cards per view
    } else {
      return 100 / 4; // Desktop: 3 cards per view
    }
  }

  // Function to update the slider
  function updateSlider(index) {
    const slideWidth = getSlideWidth();
    cardContainer.style.transform = `translateX(-${index * slideWidth}%)`;

    // Update dot active state
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
    currentSlide = index;
  }

  // Add click events to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      updateSlider(index);
      clearInterval(autoSlideInterval);
      startAutoSlide();
    });
  });

  // Auto-slide functionality
  function startAutoSlide() {
    return setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlider(currentSlide);
    }, 5000);
  }

  let autoSlideInterval = startAutoSlide();

  // Pause auto-slide when hovering over the slider
  cardContainer.addEventListener("mouseenter", () => {
    clearInterval(autoSlideInterval);
  });

  // Resume auto-slide when mouse leaves the slider
  cardContainer.addEventListener("mouseleave", () => {
    autoSlideInterval = startAutoSlide();
  });

  // Handle window resize
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      updateSlider(currentSlide);
    }, 250);
  });
});
