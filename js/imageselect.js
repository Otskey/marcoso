document.addEventListener('DOMContentLoaded', () => {
  const lottieContainers = document.querySelectorAll('.lottie-icon-5');
  const animations = []; // Array to hold animation instances

  lottieContainers.forEach((container, index) => {
    // Load the animation but do not autoplay or loop
    const animation = lottie.loadAnimation({
      container: container, // Each specific container
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../animations/slider.json'
    });

    // Push each animation instance into the array
    animations.push(animation);
  });

  // Attach click event handlers to each service item to play the corresponding animation
  document.querySelectorAll('.service-1').forEach((service, index) => {
    service.addEventListener('click', () => {
      // Ensure only the clicked animation plays
      animations.forEach((anim, animIndex) => {
        if (animIndex === index) {
          anim.goToAndPlay(0, true); // Restart and play the animation
        } else {
          anim.stop(); // Stop other animations
        }
      });

      updateContent(index); // Call your existing function to handle other updates
    });
  });
});


// image select //
function updateContent(index) {
  var services = document.getElementsByClassName('service-1');
  var contentImage = document.getElementById('service-img-frame');

  // Update active class
  for (var i = 0; i < services.length; i++) {
    services[i].classList.remove('active');
  }
  services[index].classList.add('active');

  // Update the image source based on service selected
  switch (index) {
    case 0:
      contentImage.src = 'img/cold-rolled-steel.jpg'; // Set the source to your image path
      break;
    case 1:
      contentImage.src = 'img/galvanised-steel.jpg';
      break;
    case 2:
      contentImage.src = 'img/shipping.jpg';
      break;
    case 3:
      contentImage.src = 'img/steelrolls.jpg';
      break;
    default:
      contentImage.src = 'img/tata.jpg';
  }
}


