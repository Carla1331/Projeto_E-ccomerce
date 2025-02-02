// Listas de produtos
const hamburgueres = [
    {
        nome: "Hambúrguer Clássico",
        descricao: "Pão brioche, carne 150g, queijo cheddar, alface e tomate.",
        preco: "R$ 22,90",
        imagem: "img/hamburguer.png",
        tipo: "normal"
    },
    {
        nome: "Hambúrguer Bacon",
        descricao: "Pão australiano, carne 180g, cheddar, bacon crocante e barbecue.",
        preco: "R$ 27,90",
        imagem: "hamburguer2.jpg",
        tipo: "normal"
    },
    {
        nome: "Hambúrguer Bacon",
        descricao: "Pão australiano, carne 180g, cheddar, bacon crocante e barbecue.",
        preco: "R$ 27,90",
        imagem: "hamburguer2.jpg",
        tipo: "normal"
    },
    {
        nome: "Hambúrguer Bacon",
        descricao: "Pão australiano, carne 180g, cheddar, bacon crocante e barbecue.",
        preco: "R$ 27,90",
        imagem: "hamburguer2.jpg",
        tipo: "normal"
    },
    {
        nome: "Hambúrguer Duplo",
        descricao: "Pão brioche, carne dupla 300g, cheddar duplo, alface e tomate.",
        preco: "R$ 32,90",
        imagem: "img/cards/duplo.webp",
        tipo: "duplo"
    },
    {
        nome: "Cheddar Duplo",
        descricao: "Pão brioche, carne dupla 300g, cheddar extra, cebola crispy.",
        preco: "R$ 34,90",
        imagem: "hamburguer4.jpg",
        tipo: "duplo"
    },
    {
        nome: "Hambúrguer Duplo",
        descricao: "Pão brioche, carne dupla 300g, cheddar duplo, alface e tomate.",
        preco: "R$ 32,90",
        imagem: "hamburguer3.jpg",
        tipo: "duplo"
    },
    {
        nome: "Cheddar Duplo",
        descricao: "Pão brioche, carne dupla 300g, cheddar extra, cebola crispy.",
        preco: "R$ 34,90",
        imagem: "hamburguer4.jpg",
        tipo: "duplo"
    }
];

const bebidas = [
    {
        nome: "Coca-Cola",
        descricao: "Lata 350ml.",
        preco: "R$ 5,90",
        imagem: "img/coca-cola.png"
    },
    {
        nome: "Coca-Cola",
        descricao: "Lata 350ml.",
        preco: "R$ 5,90",
        imagem: "coca.jpg"
    },
    {
        nome: "Suco Natural",
        descricao: "Laranja ou morango, 500ml.",
        preco: "R$ 8,90",
        imagem: "suco.jpg"
    },
    {
        nome: "Suco Natural",
        descricao: "Laranja ou morango, 500ml.",
        preco: "R$ 8,90",
        imagem: "suco.jpg"
    }
];

// Função para criar os cards dinamicamente
function carregarProdutos(lista, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Limpa o conteúdo antes de adicionar novos itens

    lista.forEach(produto => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <img src="${produto.imagem}" class="produto-imagem">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <span class="preco">${produto.preco}</span>

            <!-- Ícones de coração e carrinho -->
            <div class="card-icons">
                <button class="icone-btn favorito-btn">
                    <img src="img/curtir.png" alt="Favoritar">
                </button>
                <button class="icone-btn carrinho-btn">
                    <img src="img/carrinho.png" alt="Carrinho">
                </button>
            </div>

            <!-- Botão "Comprar Agora" centralizado -->
            <button class="comprar-agora">Comprar Agora</button>
        `;

        container.appendChild(card);
    });
}

// Carregar os produtos ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
    carregarProdutos(hamburgueres.filter(h => h.tipo === "normal"), "menu-hamburgueres");
    carregarProdutos(hamburgueres.filter(h => h.tipo === "duplo"), "menu-duplos");
    carregarProdutos(bebidas, "menu-bebidas");
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const menuLinks = document.querySelectorAll(".menu li a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 80;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        menuLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
});

