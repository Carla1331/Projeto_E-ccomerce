// Listas de produtos
// #################### HAMBURGUERES ######################### // 
const hamburgueres = [
    {
        nome: "Hambúrguer Clássico",
        descricao: "Pão brioche, carne 150g, queijo cheddar, alface e tomate.",
        preco: "R$ 22,90",
        imagem: "img/cards/card1.png",
        tipo: "normal"
    },
    {
        nome: "Hambúrguer Bacon",
        descricao: "Pão australiano, carne 180g, cheddar, bacon crocante e barbecue.",
        preco: "R$ 27,90",
        imagem: "img/cards/card2.png",
        tipo: "normal"
    },
    {
        nome: "Hambúrguer Picante",
        descricao: "Pão de brioche, carne 180g, cheddar, jalapeños e molho apimentado.",
        preco: "R$ 28,90",
        imagem: "img/cards/card3.png",
        tipo: "normal"
    },
    {
        nome: "Veggie Burger",
        descricao: "Pão integral, hambúrguer de grão-de-bico, rúcula, tomate e molho pesto.",
        preco: "R$ 24,90",
        imagem: "img/cards/card4.png",
        tipo: "normal"
    },
    {
        nome: "Hambúrguer Supremo",
        descricao: "Pão brioche, carne 200g, queijo cheddar, bacon fatiado e cebola caramelizada.",
        preco: "R$ 36,90",
        imagem: "img/cards/card5.png",
        tipo: "normal"
    },
    // {
    //     nome: "Frango Crocante",
    //     descricao: "Pão brioche, filé de frango empanado crocante, queijo prato e maionese temperada.",
    //     preco: "R$ 26,90",
    //     imagem: "img/hamburguer-frango.png",
    //     tipo: "normal"
    // },
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
    },
    {
        nome: "Cheddar Duplo",
        descricao: "Pão brioche, carne dupla 300g, cheddar extra, cebola crispy.",
        preco: "R$ 34,90",
        imagem: "img/hamburguer.png",
        tipo: "duplo"
    },
];
// ##################### BEBIDAS ######################## // 
const bebidas = [
    {
        nome: "Coca-Cola",
        descricao: "Lata 350ml.",
        preco: "R$ 5,90",
        imagem: "img/coca-cola.png"
    },
    {
        nome: "Coca-Cola",
        descricao: "1L",
        preco: "R$ 8,90",
        imagem: "img/coca-cola-1lt.png"
    },
    {
        nome: "Guaraná Antártica",
        descricao: "Lata 350ml.",
        preco: "R$ 5,90",
        imagem: "img/guarana.png"
    },
    {
        nome: "Guaraná Mineiro",
        descricao: "600ml.",
        preco: "R$ 7,50",
        imagem: "img/mineiro.png"
    },
    {
        nome: "Suco Natural",
        descricao: "Laranja/Morango/Abacaxi 500ml.",
        preco: "R$ 8,90",
        imagem: "img/sucos.png"
    }
];

// ##################### FUNÇÃO PARA CRIAR CARDS ######################## // 

// Função para carregar os produtos no slider
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

// Variável para controlar o índice do slider
let indiceSlider = 0;
let indiceSliderduplos = 0;
let indiceSliderbebidas = 0;
const produtosPorPagina = 4;

// Função para mover o slider
function moverSlider(direcao) {
    const slider = document.getElementById("menu-hamburgueres");
    const totalProdutos = slider.children.length;

    // Ajusta o índice de acordo com a direção
    indiceSlider += direcao;

    // Garante que a navegação seja cíclica (volta para o primeiro grupo quando chega no final)
    if (indiceSlider < 0) {
        indiceSlider = totalProdutos - produtosPorPagina; // Volta para o último grupo de 4 itens
    } else if (indiceSlider + produtosPorPagina > totalProdutos) {
        indiceSlider = 0; // Vai para o primeiro grupo de 4 itens
    }

    // Ajusta a posição do slider com base no índice
    slider.style.transform = `translateX(-${indiceSlider * 270}px)`; // 270px = largura do card + margem (ajuste conforme necessário)
}

function moverSliderDuplos(direcaoduplos) {
    const sliderduplos = document.getElementById("menu-duplos");
    const totalProdutos = sliderduplos.children.length;

    // Ajusta o índice de acordo com a direção
    indiceSliderduplos += direcaoduplos;

    // Garante que a navegação seja cíclica (volta para o primeiro grupo quando chega no final)
    if (indiceSliderduplos < 0) {
        indiceSliderduplos = totalProdutos - produtosPorPagina; // Volta para o último grupo de 4 itens
    } else if (indiceSliderduplos + produtosPorPagina > totalProdutos) {
        indiceSliderduplos = 0; // Vai para o primeiro grupo de 4 itens
    }

    // Ajusta a posição do slider com base no índice
    sliderduplos.style.transform = `translateX(-${indiceSliderduplos * 270}px)`; // 270px = largura do card + margem (ajuste conforme necessário)
}

function moverSliderBebidas(direcaobebidas) {
    const sliderbebidas = document.getElementById("menu-bebidas");
    const totalProdutos = sliderbebidas.children.length;

    // Ajusta o índice de acordo com a direção
    indiceSliderbebidas += direcaobebidas;

    // Garante que a navegação seja cíclica (volta para o primeiro grupo quando chega no final)
    if (indiceSliderbebidas < 0) {
        indiceSliderbebidas = totalProdutos - produtosPorPagina; // Volta para o último grupo de 4 itens
    } else if (indiceSliderbebidas + produtosPorPagina > totalProdutos) {
        indiceSliderbebidas = 0; // Vai para o primeiro grupo de 4 itens
    }

    // Ajusta a posição do slider com base no índice
    sliderbebidas.style.transform = `translateX(-${indiceSliderbebidas * 270}px)`; // 270px = largura do card + margem (ajuste conforme necessário)
}
// #################### CARREGAR PRODUTOS AO INICIAR A PÁGINA ######################### // 
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


// ##################### POPUP ######################## // 
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("popup").style.display = "block";
});

// Bloquear a rolagem ao carregar a página
window.onload = function() {
    document.body.classList.add('popup-aberto');
    document.documentElement.classList.add('popup-aberto');
  }
  
  function abrirPopup() {
    // Exibe o popup
    document.getElementById('popup').style.display = 'block';
    
    // Bloqueia a rolagem da página adicionando a classe 'popup-aberto' ao body e html
    document.body.classList.add('popup-aberto');
    document.documentElement.classList.add('popup-aberto');
  }
  
  function fecharPopup() {
    // Oculta o popup
    document.getElementById('popup').style.display = 'none';
    
    // Libera a rolagem da página removendo a classe 'popup-aberto'
    document.body.classList.remove('popup-aberto');
    document.documentElement.classList.remove('popup-aberto');
  }


// ################## SLIDER ########################### // 

let indiceSlide = 0;

document.addEventListener("DOMContentLoaded", function () {
    mostrarSlide(indiceSlide);
    setInterval(() => mudarSlide(1), 10000); // Troca de slide a cada 10 segundos
});

function mudarSlide(n) {
    let slides = document.getElementsByClassName("carousel-item");

    slides[indiceSlide].classList.remove("fade-in");
    slides[indiceSlide].classList.add("fade-out");

    indiceSlide += n;

    if (indiceSlide >= slides.length) {
        indiceSlide = 0;
    } else if (indiceSlide < 0) {
        indiceSlide = slides.length - 1;
    }

    setTimeout(() => {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.opacity = "0";
            slides[i].style.position = "absolute"; // Garante que todos fiquem sobrepostos
            slides[i].classList.remove("fade-in", "fade-out");
        }
        slides[indiceSlide].style.opacity = "1";
        slides[indiceSlide].style.position = "relative"; // Apenas o slide atual fica visível
        slides[indiceSlide].classList.add("fade-in");
    }, 500); // Tempo da animação (0.5s)
}

function mostrarSlide(n) {
    let slides = document.getElementsByClassName("carousel-item");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
        slides[i].style.position = "absolute";
        slides[i].classList.remove("fade-in", "fade-out");
    }
    slides[n].style.opacity = "1";
    slides[n].style.position = "relative";
    slides[n].classList.add("fade-in");
}

