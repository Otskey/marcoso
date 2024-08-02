function createCardFlipper(card) {
  let isAnimating = false;
  let mouseOverCard = false;

  function flipCard() {
    if (!isAnimating) {
      isAnimating = true;
      card.style.transform = 'rotateY(180deg)'; // Trigger the flip
      requestAnimationFrame(() => {
        setTimeout(() => {
          isAnimating = false;
          if (!mouseOverCard) {
            card.style.transform = 'rotateY(0deg)'; // Flip back if mouse has left the card
          }
        }, 600); // Animation duration
      });
    }
  }

  function unflipCard() {
    if (!isAnimating) {
      card.style.transform = 'rotateY(0deg)'; // Reverse the flip
    }
  }

  function handleMouseEnter() {
    mouseOverCard = true;
    flipCard();
  }

  function handleMouseLeave() {
    mouseOverCard = false;
    if (!isAnimating) {
      unflipCard();
    }
  }

  card.addEventListener('mouseenter', handleMouseEnter);
  card.addEventListener('mouseleave', handleMouseLeave);
}

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.steel-product-1, .steel-product-2, .steel-product-3, .steel-product-4, .steel-product-5, .steel-product-6');
  cards.forEach(createCardFlipper);
});
