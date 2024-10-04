const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentCard = 0;
let intervalId;

function updateSlider() {
  slider.style.transform = `translateX(${currentCard * -300}px)`;
}

prevBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  currentCard = (currentCard - 1 + cards.length) % cards.length;
  updateSlider();
  startInterval();
});

nextBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  currentCard = (currentCard + 1) % cards.length;
  updateSlider();
  startInterval();
});

// Optional: add keyboard navigation
document.addEventListener('keydown', (e) => {
  clearInterval(intervalId);
  if (e.key === 'ArrowLeft') {
    currentCard = (currentCard - 1 + cards.length) % cards.length;
    updateSlider();
  } else if (e.key === 'ArrowRight') {
    currentCard = (currentCard + 1) % cards.length;
    updateSlider();
  }
  startInterval();
});

function startInterval() {
  intervalId = setInterval(() => {
    currentCard = (currentCard + 1) % cards.length;
    updateSlider();
  }, 3000); // adjust the interval time as needed
}

startInterval();

// Clone the first and last cards to create an infinite loop
const firstCard = cards[0].cloneNode(true);
const lastCard = cards[cards.length - 1].cloneNode(true);

slider.appendChild(firstCard);
slider.insertBefore(lastCard, cards[0]);

// Update the cards array to include the cloned cards
cards = document.querySelectorAll('.card');