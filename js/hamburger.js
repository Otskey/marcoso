document.addEventListener('DOMContentLoaded', function() {
  let hamburgerIcon = document.querySelector('nav .material-symbols-outlined:first-of-type');
  let closeIcon = document.querySelector('nav .material-symbols-outlined:nth-of-type(2)');
  let menu = document.querySelector('nav ul');

  // Function to toggle the menu open and closed
  function toggleMenu() {
    menu.classList.toggle('show');
    hamburgerIcon.style.display = menu.classList.contains('show') ? 'none' : 'block'; // Toggle hamburger icon visibility
    closeIcon.style.display = menu.classList.contains('show') ? 'block' : 'none'; // Toggle close icon visibility
  }

  // Event listener for hamburger icon click
  hamburgerIcon.addEventListener('click', toggleMenu);

  // Event listener for close icon click
  closeIcon.addEventListener('click', toggleMenu);

  // Event listener for scroll
  window.addEventListener('scroll', function() {
    // Close the menu if it's open and the user scrolls
    if (menu.classList.contains('show')) {
      toggleMenu(); // Close the menu
    }
  });
});
