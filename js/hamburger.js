document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.material-symbols-outlined').addEventListener('click', function() {
    var menu = document.querySelector('nav ul');
    menu.classList.toggle('show');
  });
});

