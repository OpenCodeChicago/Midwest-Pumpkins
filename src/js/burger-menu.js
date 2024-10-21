const openMenuButton = document.querySelector('.burger-menu__open');
const closeMenuButton = document.querySelector('.burger-menu__close');
const mobileMenu = document.querySelector('.burger-menu');
const mobileMenuLinks = [
  ...document.querySelectorAll('.burger-menu li a'),
];
const menuMediaQuery = window.matchMedia('(width >= 75rem)');
const mainContent = document.querySelector('main');
const footerContent = document.querySelector('footer');

function openMobileMenu() {
  openMenuButton.setAttribute('aria-expanded', 'true');
  mobileMenu.classList.add('js-mobile-nav-open');

  // Focus on close button
  closeMenuButton.focus();
}

function closeMobileMenu() {
  openMenuButton.setAttribute('aria-expanded', 'false');
  mobileMenu.classList.remove('js-mobile-nav-open');

  // Focus on mobile nav menu button
  openMenuButton.focus();
}

function handleResize(e) {
  if (e.matches) {
    closeMobileMenu();
  }
}

// Close mobile menu when user clicks on a link
mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMobileMenu();
    link.focus();
  });
});

// Close mobile menu when user clicks outside of the menu
document.addEventListener('click', (e) => {
  if (
    mobileMenu.classList.contains('js-mobile-nav-open') &&
    !mobileMenu.contains(e.target) &&
    !openMenuButton.contains(e.target)
  ) {
    closeMobileMenu();
  }
});

// Close mobile nav if user presses Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' || e.key === 27) {
    openMenuButton.focus();
    closeMobileMenu();
  }
});

// Close mobile nav if user resizes window to desktop view
handleResize(menuMediaQuery);
menuMediaQuery.addEventListener('change', handleResize);

openMenuButton.addEventListener('click', openMobileMenu);
closeMenuButton.addEventListener('click', closeMobileMenu);
