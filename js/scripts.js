
let cart = [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((product, index) => {
        const item = document.createElement('li');
        item.className = 'list-group-item d-flex justify-content-between lh-sm';
        item.innerHTML = `
            <div>
                <h6 class="my-0">${product.name}</h6>
            </div>
            <span class="text-muted">$${product.price.toFixed(2)}</span>
            <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(item);
        total += product.price;
    });

    cartTotal.textContent = `$${total.toFixed(2)}`;
    document.querySelector('.badge').textContent = cart.length;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

document.getElementById('checkoutButton').addEventListener('click', () => {
    alert('Checkout not implemented yet.');
    // Implement checkout logic here
});

document.querySelectorAll('.btn-outline-dark').forEach(button => {
    button.addEventListener('click', (event) => {
        const productCard = event.target.closest('.card');
        const productName = productCard.querySelector('.fw-bolder').textContent;
        const productPrice = parseFloat(productCard.querySelector('.text-muted').textContent.replace('$', '')) || parseFloat(productCard.querySelector('.text-muted').nextSibling.textContent.replace('$', ''));
        addToCart(productName, productPrice);
    });
});