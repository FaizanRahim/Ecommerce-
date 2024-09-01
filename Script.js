document.addEventListener('DOMContentLoaded', () => {
    let cartCount = 0;

    const cart = document.querySelector('.cart span');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartCount++;
            cart.textContent = `Cart (${cartCount})`;
        });
    });
});
