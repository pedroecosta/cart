let isCartOpen = false;

function toggleCart() {
    console.log("toggleCart - current state:", isCartOpen); // Para depuración
    isCartOpen = !isCartOpen;
    if (isCartOpen) {
        console.log("Opening cart...");
        openCart();
    } else {
        console.log("Closing cart...");
        closeCart();
    }
}

function openCart() {
    let element = document.getElementById("cartMenu");
    if (window.innerWidth <= 768) {
        element.style.width = "80%";
    }else {
        element.style.width = "30%";
    }
    element.style.display = "block"; // Corregido para modificar el estilo correctamente
    element.style.transition = "0.5s";
    element.style.backgroundColor = "#f5f5dc";
    element.style.position = "fixed";
    element.style.top = "0";
    element.style.right = "0";
    element.style.height = "100%";
    element.style.overflowX = "hidden";
    updateCart();
}

function closeCart() {
    let element = document.getElementById("cartMenu");
    element.style.width = "0";
    element.style.display = "none"; // Asegúrate de ocultar el carrito
}

function updateCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cartItems');
    let cartTotal = document.getElementById('cartTotal');
    cartItems.innerHTML = '';

    let total = 0;

    cart.forEach(product => {
        let item = document.createElement('div');
        item.className = 'cart-item';
        item.innerHTML = `
            <span>${product.title}</span>
            <span>${product.quantity} x $${parseFloat(product.price).toFixed(2)}</span>
        `;
        cartItems.appendChild(item);
        
        let price = parseFloat(product.price);
        let quantity = parseInt(product.quantity, 10);

        // Verificación de valores válidos
        if (!isNaN(price) && !isNaN(quantity)) {
            total += price * quantity;
        }
    });

    console.log(`Total calculado: ${total}`);
    // Formateo del total para incluir separadores de miles
    cartTotal.textContent = total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function addToCart(title, price, category) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let productIndex = cart.findIndex(product => product.title === title);
    if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
    } else {
        cart.push({ title, price, quantity: 1, category });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateQuantityDisplay(title);
    updateCart();
}

function removeFromCart(title) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let productIndex = cart.findIndex(product => product.title === title);
    if (productIndex !== -1) {
        cart[productIndex].quantity -= 1;
        if (cart[productIndex].quantity <= 0) {
            cart.splice(productIndex, 1);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateQuantityDisplay(title);
    updateCart();
}

function deleteFromCart(title) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(product => product.title !== title);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    updateQuantityDisplay(title);
    updateCart();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let itemCount = cart.reduce((total, product) => total + product.quantity, 0);
    let cartCountElement = document.getElementById('cart-count');
    if (itemCount > 0) {
        cartCountElement.textContent = itemCount;
        cartCountElement.style.display = 'inline-block';
    } else {
        cartCountElement.style.display = 'none';
    }
    updateCart();
}

function updateQuantityDisplay(title) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let product = cart.find(product => product.title === title);
    let quantityElement = document.getElementById(`quantity-${title}`);
    if (product) {
        quantityElement.textContent = product.quantity;
    } else {
        quantityElement.textContent = 0;
    }
}

function updateQuantities() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(product => {
        updateQuantityDisplay(product.title);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    updateQuantities();
});
