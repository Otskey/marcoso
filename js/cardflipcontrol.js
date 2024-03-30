function createCardFlipper(card) {
  let isAnimating = false;
  let mouseOverCard = false;

  function flipCard() {
    if (!isAnimating) {
      isAnimating = true;
      card.style.transform = 'rotateY(180deg)'; // Trigger the flip

      setTimeout(() => {
        isAnimating = false;
        if (!mouseOverCard) {
          card.style.transform = 'rotateY(0deg)'; // Flip back if mouse has left the card
        }
      }, 600); // Animation duration
    }
  }

  function unflipCard() {
    if (!isAnimating) {
      card.style.transform = 'rotateY(0deg)'; // Reverse the flip
    }
  }

  card.addEventListener('mouseenter', () => {
    mouseOverCard = true;
    flipCard();
  });

  card.addEventListener('mouseleave', () => {
    mouseOverCard = false;
    if (!isAnimating) {
      unflipCard();
    }
  });
}

document.querySelectorAll('.steel-product-1, .steel-product-2, .steel-product-3, .steel-product-4, .steel-product-5, .steel-product-6').forEach(createCardFlipper);
