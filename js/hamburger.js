document.addEventListener('DOMContentLoaded', function() {
  let hamburgerIcon = document.querySelector('.material-symbols-outlined');
  let menu = document.querySelector('nav ul');

  hamburgerIcon.addEventListener('click', function() {
    // Log to the console when the hamburger icon is clicked
    console.log("Hamburger icon clicked");

    menu.classList.toggle('show');
    hamburgerIcon.classList.toggle('active');
  });
});
