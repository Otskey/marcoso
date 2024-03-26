// Select the header element
const header = document.querySelector('header');

// Function to toggle scrolling class based on scroll position
function toggleNavbarScroll() {
  if (window.scrollY > 50) {
    header.classList.add('scrolled'); // Add scrolled class to header
  } else {
    header.classList.remove('scrolled'); // Remove scrolled class from header
  }
}

// Event listener for scroll event
window.addEventListener('scroll', toggleNavbarScroll);
