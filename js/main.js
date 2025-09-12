// ====================
// Carrusel de proyectos
// ====================

// Selección de elementos
const slides = document.querySelectorAll('.slide'); // Todos los slides
const slidesContainer = document.querySelector('.slides'); // Contenedor de los slides
const prev = document.querySelector('.prev'); // Botón anterior
const next = document.querySelector('.next'); // Botón siguiente

let index = 0; // Índice del slide actual
let autoplayInterval; // Intervalo para autoplay
let autoplayDelay = 5000; // Tiempo entre slides (ms)
let autoplayTimeout;

// Función para mostrar el slide correspondiente al índice
function showSlide(i) {
  if (i < 0) i = slides.length - 1;
  if (i >= slides.length) i = 0;
  index = i;

  slidesContainer.style.transform = `translateX(-${i * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
  dots[i].classList.add("active");
}

// Inicia el autoplay del carrusel
function startAutoplay() {
  clearInterval(autoplayInterval);
  autoplayInterval = setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, autoplayDelay);
}

// Reinicia el autoplay tras interacción del usuario
function resetAutoplay() {
  clearInterval(autoplayInterval);
  setTimeout(startAutoplay, autoplayDelay);
  autoplayTimeout = setTimeout(() => {
    startAutoplay();
  }, autoplayDelay);
}

// Eventos para los botones (prev)
prev.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length; // Retrocede
  showSlide(index);
  resetAutoplay();
});

// Eventos para los botones (next)
next.addEventListener('click', () => {
  index = (index + 1) % slides.length; // Avanza
  showSlide(index);
  resetAutoplay();
});

const carrusel = document.querySelector('.carrusel');

// Pausa autoplay al pasar el mouse sobre el carrusel
carrusel.addEventListener('mouseenter', () => {
  clearInterval(autoplayInterval);
  clearTimeout(autoplayTimeout); // cancelar cualquier reinicio pendiente
});

carrusel.addEventListener('mouseleave', () => {
  startAutoplay();
});

// Inicia autoplay al cargar
startAutoplay();

// ====================
// Formulario de contacto
// ====================

const form = document.getElementById('contact-form'); // Formulario
const formStatus = document.getElementById('form-status'); // Mensaje de estado

// Evento al enviar el formulario
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita recargar la página

  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  //only demo
  formStatus.textContent = `Gracias ${nombre}, tu mensaje ha sido recibido: "${mensaje}"`;
  formStatus.style.color = 'green';

  form.reset();
});

// ====================
// Animación de terminal
// ====================

const text = " Xavier Ivars";
const typed = document.getElementById("typed");
let i = 0;

function typeWriterLoop() {
  typed.textContent = "";
  i = 0;

  function loop() {
    if (i < text.length) {
      typed.textContent += text.charAt(i);
      i++;
      setTimeout(loop, 150);
    } else {
      setTimeout(typeWriterLoop, 5000); // espera 2s y vuelve a empezar
    }
  }
  loop();
}

typeWriterLoop();

// ====================
// Indicadores en el carrusel
// ====================

const dots = document.querySelectorAll(".dot");

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
    resetAutoplay();
  });
});

showSlide(0); 