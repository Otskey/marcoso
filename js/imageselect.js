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

  // Function to toggle active state
  function toggleActiveState(element) {
    // Remove 'active' class from all service elements
    document.querySelectorAll('.service-1').forEach(service => {
      service.classList.remove('active');
    });

    // Add 'active' class to the clicked service element
    element.classList.add('active');
  }

  // Function to control Lottie animation
  function controlLottieAnimation(index, progress) {
    animations.forEach((anim, animIndex) => {
      if (animIndex === index) {
        anim.goToAndStop(progress, true); // Go to specified progress and pause
      } else {
        anim.goToAndStop(0, true); // Go to start and pause for other animations
      }
    });
  }

  // Attach click event handlers to each service item to play the corresponding animation
  document.querySelectorAll('.service-1').forEach((service, index) => {
    service.addEventListener('click', () => {
      // Calculate the progress to pause at (you can adjust this as needed)
      const pauseProgress = 0.5; // Pause at 50% progress
      controlLottieAnimation(index, pauseProgress * animations[index].totalFrames);
      toggleActiveState(service); // Toggle active state
      updateContent(index); // Call your existing function to handle other updates
    });
  });

  // Set default image upon initial load
  updateContent(0);
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
      contentImage.src = 'img/handshake.jpg'; // Set the source to your image path
      break;
    case 1:
      contentImage.src = 'img/containers.jpg';
      break;
    case 2:
      contentImage.src = 'img/services.jpg';
      break;
    case 3:
      contentImage.src = 'img/sand-container.jpg';
      break;
    default:
      contentImage.src = 'img/aboutus.jpg'; // Correct the file extension here
  }
}

