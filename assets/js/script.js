// Get elements for mobile hamburger menu
const hamburgerButton = document.getElementById('hamburger-button');
const closeButton = document.getElementById('close-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = mobileMenu.querySelectorAll('a');

// Toggle mobile menu on hamburger button click
hamburgerButton.addEventListener('click', () => {
    toggleMenu();
});

// Close mobile menu on close button click
if (closeButton) {
    closeButton.addEventListener('click', closeMenu);
}

// Close mobile menu on link click and navigate to the section
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Close the menu
        closeMenu();
        // Navigate to the section
        const href = link.getAttribute('href');
        window.location.hash = href; // This will navigate to the section
    });
});

// Function to toggle the mobile menu
function toggleMenu() {
    mobileMenu.classList.toggle('translate-x-0');
    mobileMenu.classList.toggle('translate-x-full');

    // Toggle icon to "X" when menu is open, hamburger when closed
    if (mobileMenu.classList.contains('translate-x-0')) {
        hamburgerButton.innerHTML = '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>'; // "X" icon
    } else {
        hamburgerButton.innerHTML = '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>'; // Hamburger icon
    }
}

// Function to close the mobile menu
function closeMenu() {
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.remove('translate-x-0');
    hamburgerButton.innerHTML = '<svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>'; // Hamburger icon
}