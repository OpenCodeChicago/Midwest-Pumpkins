const openReviewModalButton = document.getElementById('open-modal');
const closeReviewModalButton = document.getElementById('close-modal');
const reviewModal = document.getElementById('review-modal');
const reviewForm = document.forms['reviewForm'];
const reviewFormInputs = [
  ...document.querySelectorAll('input, textarea'),
];

// Function to show SweetAlert notification
function showNotification(message) {
  Swal.fire({
    icon: 'success',
    title: message,
    showConfirmButton: false,
    timer: 2000,
  });
}

// Function for phone number validation
function telephoneCheck(str) {
  const validNumberPatterns = [
    // 555-555-5555
    /^\d{3}-\d{3}-\d{4}$/,
    // (555)555-5555
    /^\(\d{3}\)\d{3}-\d{4}$/,
    // (555) 555-5555
    /^\(\d{3}\) \d{3}-\d{4}$/,
    // 555 555 5555
    /^\d{3} \d{3} \d{4}$/,
    // 555 555-5555
    /^\d{3} \d{3}-\d{4}$/,
    // 5555555555
    /^\d{10}$/,
    // 1 555 555 5555
    /^1 \d{3} \d{3} \d{4}$/,
    // 1 555-555-5555
    /^1 \d{3}-\d{3}-\d{4}$/,
    // 1 (555) 555-5555
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    // 1(555)555-5555
    /^1\(\d{3}\)\d{3}-\d{4}$/,
  ];

  return validNumberPatterns.some((pattern) => pattern.test(str));
}

function getErrorMessage(input) {
  const validity = input.validity;
  const emptyString = input.value.trim() === '';

  // Custom messages
  if (validity.valueMissing || emptyString) {
    return `${input.labels[0].innerText} can't be empty`;
  }
  if (validity.tooShort) {
    return `${input.labels[0].innerText} should be at least ${input.minLength} characters`;
  }
  if (validity.typeMismatch && input.type === 'email') {
    return `Please enter a valid email`;
  }
  if (input.type === 'tel' && !telephoneCheck(input.value)) {
    return `Please enter a 10 digit phone number`;
  }
}

function validateInput(e) {
  const input = e.target;
  const value = input.value.trim();
  const message = getErrorMessage(input);
  const errorID = `${input.id}-error`;
  const messageDiv = document.getElementById(errorID);
  const validInput = input.checkValidity();

  if (!validInput || value === '') {
    // Set aria attribute on input field
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-live', 'polite');

    // Add custom error message or use default message
    messageDiv.innerText = message || input.validationMessage;
  }

  if (input.type === 'tel' && !telephoneCheck(value)) {
    // Set aria attribute on input field
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-live', 'polite');

    // Add custom error message or use default message
    messageDiv.innerText = message || input.validationMessage;
  }
}

function validateReviewForm() {
  // Check for errors on exiting input field
  reviewFormInputs.forEach((input) => {
    input.addEventListener('blur', (e) => {
      validateInput(e);
    });
  });

  // Check for error corrections
  reviewFormInputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      const valid = input.checkValidity();

      if (valid) {
        // Remove aria attribute on input field
        input.setAttribute('aria-invalid', false);
        input.removeAttribute('aria-live', 'polite');

        // Remove error message
        document.getElementById(`${input.id}-error`).innerText = '';
      }
    });
  });
}

validateReviewForm();

// Event listeners for modal
reviewForm.addEventListener('submit', function (event) {
  const isValid = reviewForm.checkValidity();

  event.preventDefault(); // Prevent form submission

  if (isValid) {
    showNotification('Thank you for your review!');
    reviewModal.classList.add('hidden'); // Hide modal on submit
    reviewForm.reset(); // Reset form fields
  }
});

openReviewModalButton.addEventListener('click', () => {
  reviewModal.classList.remove('hidden'); // Show modal
});

closeReviewModalButton.addEventListener('click', () => {
  reviewModal.classList.add('hidden'); // Hide modal
});

window.addEventListener('click', (event) => {
  if (event.target === reviewModal) {
    reviewModal.classList.add('hidden'); // Hide modal when clicking outside
  }
});
