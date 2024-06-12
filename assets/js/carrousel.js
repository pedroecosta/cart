let currentIndex = 0;

const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length; 
const wrapper = document.querySelector('.carousel-wrapper');
const carouselDots = document.querySelector('.carousel-dots');

// Crear los puntos de navegación:
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active'); 
    carouselDots.appendChild(dot);
}

function updateActiveDot() {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentIndex) {
            dot.classList.add('active');
        }
    });
}

function moveCarousel() {
    if (currentIndex === totalSlides - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    
    let offsetMultiplier;

    if (window.innerWidth <= 768) {  // Si el ancho es 768px o menor (móvil)
        offsetMultiplier = 121;
    } else {  // Si el ancho es mayor de 768px (escritorio)
        offsetMultiplier = 110;
    }

    const offset = currentIndex * offsetMultiplier;
    wrapper.style.transform = `translateX(-${offset}%)`;

    updateActiveDot();
}


setInterval(moveCarousel, 5000);
