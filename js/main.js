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

const carrusel = document.querySelector('.carrusel');

carrusel.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
carrusel.addEventListener('mouseleave', () => startAutoplay());

startAutoplay();

const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    //only demo
    formStatus.textContent = `Gracias ${nombre}, tu mensaje ha sido recibido: "${mensaje}"`;
    formStatus.style.color = 'green';

    form.reset();
});