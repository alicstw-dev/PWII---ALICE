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
 const nums = [23, 5, 6, 8, 9 ,10, 12, 4]

 const somatoria = (nums) => nums.reduce((acc, num) => acc + num);
//Padrão de composição de funções PIPE
//A saída de uma função serve como entrada de outra
// Usamos para criar um pipeline de execuções
const pipe = (...fns) => (dados) => fns.reduce((acc, fn) => fn(acc), dados); 

const execution = pipe(
    somatoria,
    console.log
)

execution(nums);