function initPopupHandlers() {
    const buyButtons = document.querySelectorAll('.buy-product');
    const loginPopup = document.getElementById('loginPopup');
    const closePopupBtn = document.querySelector('.close-popup');
    const loginForm = loginPopup.querySelector('form');

    buyButtons.forEach(button => {
        button.addEventListener('click', () => {
            loginPopup.style.display = 'block';
        });
    });

    closePopupBtn.addEventListener('click', () => {
        loginPopup.style.display = 'none';
    });

    const invalidPopup = document.getElementById('invalidPopup');
    const closeInvalidPopupBtn = document.querySelector('.close-popup-invalid');

    closeInvalidPopupBtn.addEventListener('click', () => {
        invalidPopup.style.display = 'none';
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Evitar enviar el formulario
        loginPopup.style.display = 'none'; // Cierra el pop-up de login
        invalidPopup.style.display = 'block'; // Muestra el pop-up de credenciales inválidas
    });
}
