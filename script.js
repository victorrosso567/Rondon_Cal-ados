[script.js](https://github.com/user-attachments/files/30745519/script.js)
// Banco de dados simulado inicial com foco em saltos e sandálias femininas
let products = [
    { id: 1, name: "Salto Alto Fino Clássico Nude", price: 289.90, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Sandália de Salto Bloco com Tiras", price: 239.90, image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Salto Stiletto Vermelho Paixão", price: 319.90, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Sandália Rasteira Elegance Tiras Finas", price: 159.90, image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Salto Anabela Corda Verão", price: 219.90, image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Sandália de Salto Alto com Strass", price: 359.90, image: "https://images.unsplash.com/photo-1573103491380-454c6370b08f?auto=format&fit=crop&w=500&q=80" }
];

let cart = [];

// Elementos do DOM
const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItemsContainer = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotalPrice = document.getElementById('cartTotalPrice');
const addProductForm = document.getElementById('addProductForm');

// Função para exibir produtos na tela
function displayProducts(productsToDisplay) {
    productGrid.innerHTML = '';
    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                <button onclick="addToCart(${product.id})">Adicionar à Sacola</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Adicionar produto ao carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Atualizar interface do carrinho
function updateCart() {
    cartCount.textContent = cart.length;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>A sua sacola está vazia.</p>';
        cartTotalPrice.textContent = 'R$ 0,00';
        return;
    }

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item) => {
        total += item.price;
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>R$ ${item.price.toFixed(2).replace('.', ',')}</span>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    cartTotalPrice.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Sistema de cadastro de novo produto pelo Moderador
addProductForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const image = document.getElementById('productImage').value;

    const newProduct = {
        id: products.length + 1,
        name: name,
        price: price,
        image: image
    };

    products.push(newProduct);
    displayProducts(products);

    alert("Produto cadastrado com sucesso!");
    addProductForm.reset();
});

// Sistema de busca em tempo real
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(term)
    );
    displayProducts(filteredProducts);
});

// Abertura e fechamento do modal do carrinho
cartBtn.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

closeCart.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// Função de finalizar compra
function checkout() {
    if (cart.length === 0) {
        alert("Sua sacola está vazia!");
        return;
    }
    alert("Pedido finalizado com sucesso! Obrigada por escolher a Rondon Calçados Femininos.");
    cart = [];
    updateCart();
    cartModal.style.display = 'none';
}

// Inicializar a página carregando os produtos
displayProducts(products);
