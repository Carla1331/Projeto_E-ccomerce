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
        imagem: "img/hamburguer-bacon.png",
        tipo: "normal"
    },
    {
        nome: "Hambúrguer Picante",
        descricao: "Pão de brioche, carne 180g, cheddar, jalapeños e molho especial apimentado.",
        preco: "R$ 28,90",
        imagem: "img/hamburguer-picante.png",
        tipo: "normal"
    },
    {
        nome: "Veggie Burger",
        descricao: "Pão integral, hambúrguer de grão-de-bico, rúcula, tomate e molho pesto.",
        preco: "R$ 24,90",
        imagem: "img/hamburguer-veggie.png",
        tipo: "normal"
    },
    // {
    //     nome: "Hambúrguer Supremo",
    //     descricao: "Pão brioche, carne 200g, queijo suíço, cogumelos salteados e cebola caramelizada.",
    //     preco: "R$ 36,90",
    //     imagem: "img/hamburguer-supremo.png",
    //     tipo: "normal"
    // },
    // {
    //     nome: "Frango Crocante",
    //     descricao: "Pão brioche, filé de frango empanado crocante, queijo prato e maionese temperada.",
    //     preco: "R$ 26,90",
    //     imagem: "img/hamburguer-frango.png",
    //     tipo: "normal"
    // },
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
        imagem: "img/cheddar-duplo.png",
        tipo: "duplo"
    },
    {
        nome: "Hambúrguer Duplo",
        descricao: "Pão brioche, carne dupla 300g, cheddar duplo, alface e tomate.",
        preco: "R$ 32,90",
        imagem: "img/hamburguer.png",
        tipo: "duplo"
    },
    {
        nome: "Cheddar Duplo",
        descricao: "Pão brioche, carne dupla 300g, cheddar extra, cebola crispy.",
        preco: "R$ 34,90",
        imagem: "img/hamburguer.png",
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

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("popup").style.display = "block";
});
function fecharPopup() {
    document.getElementById("popup").style.display = "none";
}


function abrirPopup() {
    document.getElementById("popup").style.display = "block";
}

function fecharPopup() {
    document.getElementById("popup").style.display = "none";
}

let indiceSlide = 0; // Certifique-se de que a variável está declarada corretamente

document.addEventListener("DOMContentLoaded", function () {
    mostrarSlide(indiceSlide);
});

function mudarSlide(n) {
    indiceSlide += n;
    mostrarSlide(indiceSlide);
}

function mostrarSlide(n) {
    let slides = document.getElementsByClassName("carousel-item");

    if (n >= slides.length) { 
        indiceSlide = 0; 
    } else if (n < 0) { 
        indiceSlide = slides.length - 1; 
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[indiceSlide].style.display = "block";
}