// Seleciona todos os botões "Adicionar"
const botoesAdicionar = document.querySelectorAll(".adicionar");

// Seleciona a lista onde os itens do pedido serão exibidos
const listaPedido = document.querySelector("#popupMenu ul");

// Seleciona o elemento total diretamente do HTML
const totalElemento = document.getElementById("total");

// Variável que armazena o total do pedido
let total = 0;

// Array que armazenará os itens do pedido
let carrinho = [];

// Percorre todos os botões 'Adicionar' e adiciona um evento de clique
botoesAdicionar.forEach((botao) => {
botao.addEventListener("click", () => {
const produto = botao.parentElement;
const nome = produto.querySelector("h3").textContent;
const preco = parseFloat(produto.querySelector(".preco").textContent.replace("R$", "").trim());
    // Cria um item na lista de pedidos
    const itemPedido = document.createElement("li");
    itemPedido.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

    // Adiciona o item à lista de pedidos
    listaPedido.appendChild(itemPedido);

    // Atualiza o total do pedido
    total += preco;
    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;

    // Adiciona o item ao carrinho
    carrinho.push({ nome, preco });
    });
});
// Simula a finalização do pedido e redireciona para WhatsApp
const botaoFinalizarPedido = document.getElementById("finalizarPedido");

botaoFinalizarPedido.addEventListener("click", () => {
if (carrinho.length === 0) {
alert("Seu carrinho está vazio!");
return;
}
// Formata a mensagem do pedido
let mensagem = "Olá, gostaria de fazer um pedido:\n\n";
carrinho.forEach(item => {
    mensagem += `• ${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
});
mensagem += `\nTotal: R$ ${total.toFixed(2)}`;

// Define o número do WhatsApp (substitua pelo correto)
const numeroWhatsApp = "5543984497729"; 
const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

// Redireciona para o WhatsApp
window.open(url, "_blank");

// Limpa o carrinho após finalizar o pedido
listaPedido.innerHTML = "";
listaPedido.appendChild(totalElemento);
total = 0;
totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
carrinho = [];
});
// Função para abrir e fechar o pop-up do carrinho
const botaoSacola = document.getElementById("popupCompra");
const popupMenu = document.getElementById("popupMenu");
const popupOverlay = document.createElement("div");
botaoSacola.addEventListener("click", () => {
popupMenu.classList.toggle("popupActive");
});
// Cria o fundo escuro do pop-up
popupOverlay.classList.add("popupOverlay");
document.body.appendChild(popupOverlay);

// Exibir pop-up ao clicar na sacola
botaoSacola.addEventListener("click", () => {
    popupMenu.classList.add("popupActive");
    popupOverlay.classList.add("popupOverlayActive");
});

// Fechar pop-up ao clicar no fundo escuro
popupOverlay.addEventListener("click", () => {
    popupMenu.classList.remove("popupActive");
    popupOverlay.classList.remove("popupOverlayActive");
});