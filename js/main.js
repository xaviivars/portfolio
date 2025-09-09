const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let index = 0;
let autoplayInterval;
let autoplayDelay = 3000;

function showSlide(i) {
  slidesContainer.style.transform = `translateX(-${i * 100}%)`;
}

function startAutoplay() {
  autoplayInterval = setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, autoplayDelay);
}

function resetAutoplay() {
    clearInterval(autoplayInterval);
    setTimeout(startAutoplay, autoplayDelay);
}

prev.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
  resetAutoplay();
});

next.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
  resetAutoplay();
});

startAutoplay();