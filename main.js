const produtos = [

  {
    nome: "Alface",
    categoria: "Verdura",
    quantidade: 454,
    preco: 3.50
  },

  {
    nome: "Cenoura",
    categoria: "Legume",
    quantidade: 553,
    preco: 4.20
  },

  {
    nome: "Brócolis",
    categoria: "Verdura",
    quantidade: 252,
    preco: 7.50
  },

  {
    nome: "Batata",
    categoria: "Tubérculo",
    quantidade: 706,
    preco: 5.00
  },

  {
    nome: "Tomate",
    categoria: "Legume",
    quantidade: 605,
    preco: 6.00
  },

  {
    nome: "Cebola",
    categoria: "Legume",
    quantidade: 459,
    preco: 4.50
  },

  {
    nome: "Couve",
    categoria: "Verdura",
    quantidade: 304,
    preco: 3.00
  },

  {
    nome: "Abóbora",
    categoria: "Legume",
    quantidade: 202,
    preco: 8.00
  },

  {
    nome: "Mandioca",
    categoria: "Tubérculo",
    quantidade: 356,
    preco: 6.50
  },

  {
    nome: "Pepino",
    categoria: "Legume",
    quantidade: 504,
    preco: 3.80
  }
];

// Buscamos no HTML o elemento que possui o ID "corpoTabela"
const corpoTabela = document.getElementById("corpoTabela");

// Percorremos todos os produtos que estão dentro do array
for (let produto of produtos) {

  // Criamos uma nova linha da tabela HTML
  const linha = document.createElement("tr");

  // Inserimos os dados do produto em células da tabela
  linha.innerHTML = `
    <td>${produto.nome}</td>
    <td>${produto.categoria}</td>
    <td>${produto.quantidade}</td>

    <!-- Exibimos o preço formatado como moeda brasileira -->
    <td class="preco">${produto.preco.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })}</td>
  `;

  // Adicionamos a linha criada ao corpo da tabela HTML
  corpoTabela.appendChild(linha);
}