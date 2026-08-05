[index.html](https://github.com/user-attachments/files/30745367/index.html)
    </header>

    <!-- Seção de Destaque (Hero) -->
    <section cl<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rondon Calçados Femininos - Elegância a cada passo</title>
    <link rel="stylesheet" href="style.css">
    <!-- Ícones do FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>

    <!-- Cabeçalho -->
    <header>
        <div class="logo">
            <h1>Rondon <span>Calçados</span></h1>
        </div>
        <div class="search-bar">
            <input type="text" id="searchInput" placeholder="Pesquisar saltos, sandálias...">
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
        <div class="cart-icon" id="cartBtn">
            <i class="fa-solid fa-bag-shopping"></i>
            <span id="cartCount">0</span>
        </div>
    </header>

    <!-- Seção de Destaque (Hero) -->
    <section class="hero">
        <div class="hero-content">
            <h2>Coleção Luxo & Conforto</h2>
            <p>Descubra saltos e sandálias que elevam o seu estilo em qualquer ocasião.</p>
            <a href="#produtos" class="btn">Explorar Coleção</a>
        </div>
    </section>

    <!-- Seção de Produtos -->
    <section class="products-section" id="produtos">
        <h2>Destaques da Estação</h2>
        <div class="product-grid" id="productGrid">
            <!-- Os produtos serão injetados via JavaScript -->
        </div>
    </section>

    <!-- Painel do Moderador (Adicionar Produtos) -->
    <section class="admin-section">
        <div class="admin-container">
            <h3><i class="fa-solid fa-lock"></i> Painel do Moderador - Adicionar Produto</h3>
            <form id="addProductForm">
                <div class="form-group">
                    <input type="text" id="productName" placeholder="Nome do Calçado (Ex: Salto Bloco Metalizado)" required>
                </div>
                <div class="form-group">
                    <input type="number" step="0.01" id="productPrice" placeholder="Preço (R$)" required>
                </div>
                <div class="form-group">
                    <input type="url" id="productImage" placeholder="Link da Imagem (URL da foto)" required>
                </div>
                <button type="submit" class="admin-btn">Cadastrar Produto</button>
            </form>
        </div>
    </section>

    <!-- Modal do Carrinho -->
    <div class="cart-modal" id="cartModal">
        <div class="cart-content">
            <span class="close-btn" id="closeCart">&times;</span>
            <h2>Sua Sacola</h2>
            <div id="cartItems">
                <p>A sua sacola está vazia.</p>
            </div>
            <div class="cart-total">
                <p>Total: <span id="cartTotalPrice">R$ 0,00</span></p>
                <button class="checkout-btn" onclick="checkout()">Finalizar Pedido</button>
            </div>
        </div>
    </div>

    <!-- Rodapé -->
    <footer>
        <p>&copy; 2026 Rondon Calçados Femininos. Todos os direitos reservados.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>ass="hero">
        <div class="hero-content">
            <h2>Coleção Luxo & Conforto</h2>
            <p>Descubra saltos e sandálias que elevam o seu estilo em qualquer ocasião.</p>
            <a href="#produtos" class="btn">Explorar Coleção</a>
        </div>
    </section>

    <!-- Seção de Produtos -->
    <section class="products-section" id="produtos">
        <h2>Destaques da Estação</h2>
        <div class="product-grid" id="productGrid">
            <!-- Os produtos serão injetados via JavaScript -->
        </div>
    </section>

    <!-- Painel do Moderador (Adicionar Produtos) -->
    <section class="admin-section">
        <div class="admin-container">
            <h3><i class="fa-solid fa-lock"></i> Painel do Moderador - Adicionar Produto</h3>
            <form id="addProductForm">
                <div class="form-group">
                    <input type="text" id="productName" placeholder="Nome do Calçado (Ex: Salto Bloco Metalizado)" required>
                </div>
                <div class="form-group">
                    <input type="number" step="0.01" id="productPrice" placeholder="Preço (R$)" required>
                </div>
                <div class="form-group">
                    <input type="url" id="productImage" placeholder="Link da Imagem (URL da foto)" required>
                </div>
                <button type="submit" class="admin-btn">Cadastrar Produto</button>
            </form>
        </div>
    </section>

    <!-- Modal do Carrinho -->
    <div class="cart-modal" id="cartModal">
        <div class="cart-content">
            <span class="close-btn" id="closeCart">&times;</span>
            <h2>Sua Sacola</h2>
            <div id="cartItems">
                <p>A sua sacola está vazia.</p>
            </div>
            <div class="cart-total">
                <p>Total: <span id="cartTotalPrice">R$ 0,00</span></p>
                <button class="checkout-btn" onclick="checkout()">Finalizar Pedido</button>
            </div>
        </div>
    </div>

    <!-- Rodapé -->
    <footer>
        <p>&copy; 2026 Rondon Calçados Femininos. Todos os direitos reservados.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
