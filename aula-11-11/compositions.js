const produtos = [
  { nome: "Arroz 5kg", preco: 18.90, qtd: 20, categoria: "Alimentos" },
  { nome: "Feijão Preto 1kg", preco: 7.50, qtd: 35, categoria: "Alimentos" },
  { nome: "Macarrão Espaguete", preco: 4.20, qtd: 50, categoria: "Alimentos" },
  { nome: "Óleo de Soja 900ml", preco: 6.80, qtd: 40, categoria: "Alimentos" },
  { nome: "Detergente Líquido", preco: 2.10, qtd: 60, categoria: "Limpeza" },
  { nome: "Sabão em Pó 1kg", preco: 9.90, qtd: 15, categoria: "Limpeza" },
  { nome: "Shampoo 350ml", preco: 12.50, qtd: 25, categoria: "Higiene" },
  { nome: "Creme Dental 90g", preco: 3.80, qtd: 80, categoria: "Higiene" },
  { nome: "Café 500g", preco: 14.60, qtd: 18, categoria: "Alimentos" },
  { nome: "Biscoito Cream Cracker", preco: 3.20, qtd: 45, categoria: "Alimentos" }
];

const valorTotal = produtos.filter(p => p.categoria == "Limpeza")
.map(p => {
    const newP = {...p};
    newP.preco = newP.preco * (1 - 0.1);
    return newP;
}).reduce((acc, p) => acc + (p.preco * p.qtd), 0);

console.log(valorTotal);