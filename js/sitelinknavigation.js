// JavaScript to scroll to sections when a link is clicked
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      // Check if the target is the contact us section
      if (this.getAttribute('href') === '#contact-us') {
        document.querySelector('.contact-us-content').scrollIntoView({
          behavior: 'smooth',
          block: 'start' // Adjust this value if needed
        });
      }
      // Check if the target is the our locations section
      else if (this.getAttribute('href') === '#our-locations') {
        document.querySelector('.our-locations').scrollIntoView({
          behavior: 'smooth',
          block: 'start' // Adjust this value if needed
        });
      }
      else if (this.getAttribute('href') === '#hero') {
        document.querySelector('.hero').scrollIntoView({
          behavior: 'smooth',
          block: 'start' // Adjust this value if needed
        });
      }
      else if (this.getAttribute('href') === '#about-us') {
        document.querySelector('.about-us-content').scrollIntoView({
          behavior: 'smooth',
          block: 'start' // Adjust this value if needed
        });
      }
      else {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start' // Adjust this value if needed
        });
      }
    }
  });
});



