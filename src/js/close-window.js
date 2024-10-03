document.addEventListener('DOMContentLoaded', function () {
    // Select modal elements
    const buyNowModal = document.getElementById('buyNowModal');
    const reviewsModal = document.getElementById('reviewsModal');
    const subscribeModal = document.getElementById('subscribeModal');

    const buyNowBackdrop = document.getElementById('modalBackdrop');
    const reviewsBackdrop = document.getElementById('reviewsModalBackdrop');
    const subscribeBackdrop = document.getElementById('subscribeModalBackdrop');

    const buyNowButton = document.getElementById('buy-now-btn');
    const reviewsButton = document.getElementById('reviews-btn');
    const subscribeButton = document.getElementById('subscribe-btn');

    const closeBuyNowButton = buyNowModal.querySelector('.close-btn'); // Close button for Buy Now modal
    const closeReviewsButton = reviewsModal.querySelector('.close-btn'); // Close button for Reviews modal
    const closeSubscribeButton = subscribeModal.querySelector('.close-btn'); // Close button for Subscribe modal

    // Function to open the modal
    function openModal(modal, backdrop) {
        modal.style.display = 'block';  // Show the modal
        backdrop.style.display = 'block'; // Show the backdrop
    }

    // Function to close the modal
    function closeModal(modal, backdrop) {
        modal.style.display = 'none';  // Hide the modal
        backdrop.style.display = 'none'; // Hide the backdrop
    }

    // Open Buy Now modal
    buyNowButton.addEventListener('click', function () {
        openModal(buyNowModal, buyNowBackdrop);
    });

    // Open Reviews modal
    reviewsButton.addEventListener('click', function () {
        openModal(reviewsModal, reviewsBackdrop);
    });

    // Open Subscribe modal
    subscribeButton.addEventListener('click', function () {
        openModal(subscribeModal, subscribeBackdrop);
    });

    // Close Buy Now modal
    closeBuyNowButton.addEventListener('click', function () {
        closeModal(buyNowModal, buyNowBackdrop);
    });

    // Close Reviews modal
    closeReviewsButton.addEventListener('click', function () {
        closeModal(reviewsModal, reviewsBackdrop);
    });

    // Close Subscribe modal
    closeSubscribeButton.addEventListener('click', function () {
        closeModal(subscribeModal, subscribeBackdrop);
    });

    // Close modal when clicking on the backdrop
    buyNowBackdrop.addEventListener('click', function () {
        closeModal(buyNowModal, buyNowBackdrop);
    });

    reviewsBackdrop.addEventListener('click', function () {
        closeModal(reviewsModal, reviewsBackdrop);
    });

    subscribeBackdrop.addEventListener('click', function () {
        closeModal(subscribeModal, subscribeBackdrop);
    });

    // Close modal on 'Esc' key press
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal(buyNowModal, buyNowBackdrop);
            closeModal(reviewsModal, reviewsBackdrop);
            closeModal(subscribeModal, subscribeBackdrop);
        }
    });
});
