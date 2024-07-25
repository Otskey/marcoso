document.addEventListener('DOMContentLoaded', () => {
  // Load animations
  const animations = [
    lottie.loadAnimation({
      container: document.getElementById('lottie-animation-1'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../animations/sourcing.json'
    }),
    lottie.loadAnimation({
      container: document.getElementById('lottie-animation-2'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../animations/communication.json'
    }),
    lottie.loadAnimation({
      container: document.getElementById('lottie-animation-3'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../animations/growth.json'
    }),
    lottie.loadAnimation({
      container: document.getElementById('lottie-animation-4'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: '../animations/presence.json'
    })
  ];

  let currentIndex = 0; // Track the current index for sequential playback

  // Function to check if the element is in the viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to play animations in sequence with a conditional delay between the second and third animations
  function playInSequence() {
    if (currentIndex < animations.length) {
      const animation = animations[currentIndex];
      animation.play();
      animation.addEventListener('complete', () => {
        currentIndex++;
        // Check if the current animation is the second one (index 1) and prepare to start the third (index 2)
        if (currentIndex === 2) { // Since arrays are 0-based, 1 is the second animation, and the next one is 2
          setTimeout(() => {
            if (currentIndex < animations.length) {
              playInSequence(); // Play the third animation after a delay
            }
          }, 0); // 500 milliseconds delay, adjust as necessary
        } else {
          if (currentIndex < animations.length) {
            playInSequence(); // Immediately proceed to the next animation for others
          }
        }
      }, { once: true });
    }
  }

  // Function to start the sequence when the section is visible
  function startSequenceWhenVisible() {
    const strengthsSection = document.getElementById('strengths');
    if (isInViewport(strengthsSection)) {
      playInSequence();
    } else {
      window.addEventListener('scroll', function onScroll() {
        if (isInViewport(strengthsSection) && currentIndex === 0) {
          playInSequence();
          window.removeEventListener('scroll', onScroll); // Remove listener once started
        }
      });
    }
  }

  // Call to check visibility and potentially start the sequence
  startSequenceWhenVisible();

  // Adjusted hover functionality
  animations.forEach((animation, index) => {
    let hasLeft = true; // Flag to track if the mouse has left the area

    const serviceElement = document.querySelector(`.strengths-${index + 1}`);
    if (serviceElement) {
      serviceElement.addEventListener('mouseover', () => {
        if (hasLeft && currentIndex >= animations.length) { // Check if initial sequence is complete
          animation.goToAndPlay(0, true);
          hasLeft = false;
        }
      });

      serviceElement.addEventListener('mouseleave', () => {
        hasLeft = true;
      });
    }
  });
});
