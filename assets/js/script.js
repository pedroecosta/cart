function initNavbar() {
    var menuIcon = document.getElementById("mobile-menu");
    var navMenu = document.querySelector(".navbar-menu");

    menuIcon.addEventListener("click", function() {
        if (navMenu.style.display === "flex") {
            navMenu.style.display = "none";
        } else {
            navMenu.style.display = "flex";
        }
    });


    window.addEventListener("scroll", function() {
        var nav = document.querySelector("nav");
        if (window.pageYOffset > 50) { 
            nav.classList.remove("black-bg");
            nav.classList.add("transparent-bg");
        } else {
            nav.classList.remove("transparent-bg");
            nav.classList.add("black-bg");
        }
    });
}


//end navbar

//start banner

//reveal

ScrollReveal().reveal('.reveal-left', { 
    delay: 600,
    distance: '500px',
    origin: 'left',
    reset: true,
    opacity: 0
});

ScrollReveal().reveal('.reveal-right', { 
    delay: 600,
    distance: '200px',
    origin: 'right',
    reset: false,  // Configura esto a false
    opacity: 0,
    cleanup: true  // Agrega esta opción
});


ScrollReveal().reveal('.reveal-bottom', { 
    delay: 500,
    distance: '500px',
    origin: 'bottom',
    reset: true,
    opacity: 0
});

const typingText = document.querySelector(".typing");
const baseText = "s";
let currentChar = "?";
let adding = true;

function typeWriter() {
    if (adding) {
        typingText.textContent = baseText + currentChar;
        if (currentChar === "?") {
            currentChar = " ";
        } else {
            currentChar = "?";
        }
        adding = false;
    } else {
        typingText.textContent = baseText;
        adding = true;
    }

    setTimeout(typeWriter, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    initNavbar();
    typeWriter();
    moveCarousel();
    initPopupHandlers();
});

document.addEventListener('DOMContentLoaded', initPopupHandlers);


// end banner

// start footer

document.querySelector('.scroll-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



