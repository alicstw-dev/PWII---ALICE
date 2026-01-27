//questao 1
//console.log(multiplica(2,3));
//function multiplica(x, y) { return x * y; }

//const sub = function (a,b) { return a - b; }
//console.log(sub(5,2)); // descomente e explique o que acontece
//R: B) - Multiplica funciona porque tem uma declaração de função, então ela é movida para o topo do escopo antes de qualquer outra linha ser executada, e já é reconhecida. Já a sub foi feita como expressão de uma função e está atrelada a uma variável, então ela não é inicializada, sendo assim, caso tente chamar sub antes, assim como em mult, vai dar erro.

/**
 * questao 2
 * R: Está errada, pois o this nas arrows herdam o escopo pai, onde ela foi denifida, e também não serve como new ppois a função não foi projetada pra isso.
 */

//questão 3
// function calculaImposto(valor, taxa = 0.1) {
//   return valor * taxa;
// }
// console.log(calculaImposto(100, undefined));
// console.log(calculaImposto(100, null));
//R: a de undefined retorna 10 justamente porque nos parâmetros foi definido um valor fixo caso não especificasse, e a de null retorna 0 porque o js reconhece como um valor real, e atribui a ele 0.

//questão 4
//a) IIFE isola o escopo das variáveis declaradas dentro dela, impedindo que sejam acessadas fora do seu contexto

// (function(a, b){
//     let teste = "teste";
//     console.log(a + b);
// })(10, 5);

// (function(){
//     let privateVariable = "x";
//     console.log(privateVariable); 
// })();

//questao 5: curto-circuito é quando js para a avaliação de uma expressão quando o resultado final já é conhecido
// function getUserNameOrLoginCTA(user){
//     return user.name || "<a href='/login'>Entrar</a>";
// }
// const userA = { name: false };
// console.log(getUserNameOrLoginCTA(userA));

// a diferença é que com || ele procura pelo primeiro valor true, já com && ele procura pelo primeiro valor false. ex: isLoggedIn && <WelcomeMessage

//questao 6: const não torna o valor imutável; ele torna a referência imutável, o que significa que não dá pra reatribuir um novo valor.

// QUE FUNCIONA !!! 
// const userOriginal = { name: "Carlos", location: "SP" };
// Atualização IMUTÁVEL:
//  1. Copia todas as chaves de 'userOriginal' para um novo objeto
//  2. Define (ou sobrescreve) a chave 'location'
// const userAtualizado = { ...userOriginal, location: "RJ" };

// console.log(userAtualizado); // { name: "Carlos", location: "RJ" }
// console.log(userOriginal);   // { name: "Carlos", location: "SP" } (Permanece intacto!)

//questao 7: b) for of

//questao 8: c) 

//questao 9: embora o código funcione, a afirmação é falsa, pois a convenção e camelCase é a regra princiapl.

//questao 10: document.createElement('li') ; element.appendChild(child) ; parent.removeChild(child)

//questao 11: c) button.addEventListener("click", minhaFuncao)

//questao 12: seleção: encontra o element; vinculação: quando adicionamos um ouvinte ao elemento que selecionamos; callback: é a instrução que passamos

{/* <html>
    <head>
        <script scr = "questoes.js"> </script>
        <title> FORMULÁRIO </title>  
    </head>
     <body>
        <form id = "forms">
            <h2> LOGIN </h2>
        <div>
            <label for = "email"> Email </label>
            <input type = "email" id = "email" > </input>
            <div id = "emailErro" class = "error-message"> </div>
        </div>
        <button type = "submit"> ENTRAR </button>
        </form>
     </body>

</html> */}

// const formCadastro = document.querySelector("#forms");

// formCadastro.addEventListener("submit", function(evento){
//     evento.preventDefault();

//     const email = document.querySelector("#email").value;
//     const emailErro = document.querySelector("#emailErro").value;

//     if (email.value.trim() === ""){
//         emailErro.textContent = "O email é obrigatório.";
//         emailErro.classList.add("error");
//         email.classList.add("error");
//     } else {
//         msgErro.textContent = "";
//         msgErro.classList.remove("error");
//         email.classList.remove("error");
//   }
// });

//questao 13: falsa, funções puras não pode alterar variávei globais e naõ devem depender de estados externos
// let contador = 0;

// function incrementa() {
//   contador++;        
//   return 1;          
// }

// console.log(incrementa());
// console.log(incrementa());
// console.log(contador);

//questao 14: push() modifica o array original, pois altera seu conteúdo diretamente:
// function adicionarItem(arr, item) {
//   return [...arr, item];
// }

// const original = [1, 2];

// const novo = adicionarItem(original, 3);

// console.log(original); // [1, 2]
// console.log(novo);    

//questao 15: b

//questao 16: .forEach(): ideal quando quer percorrer por cada item, sem gerar um novo array ou modificar; .map() gera um novo array e altera o valor; .filter(): filtra elementos de acordo com a condição e retorna um array; .reduce(): reduz a um único valor.

//questao 17:
// const pedidos = [
//   { cliente: "A", total: 100 },
//   { cliente: "B", total: 200 },
//   { cliente: "A", total: 50  },
//   { cliente: "C", total: 350 }
// ];

// const pedidosMap = pedidos.map(pedido => pedido.total);
// console.log(pedidosMap);

// const pedidosFilter = pedidos.filter(pedido => pedido.total >= 200);
// console.log(pedidosFilter);

// const pedidosReduce = pedidos.reduce((acc, pedido) => acc + pedido.total, 0);
// console.log(pedidosReduce);

//questao 18
// function aplicarTaxa(t) {
//   return function (valor) {
//     return valor * (1 + t);
//   };
// }
// // Cria funções específicas fixando a taxa
// const aplicarICMS = aplicarTaxa(0.18); 
// const aplicarIPI  = aplicarTaxa(0.12);

// console.log(aplicarICMS(100));

//questao 19: compose(f, g)(x)  →  f(g(x)) ; pipe: pipe(f, g)(x)  →  g(f(x))
// const somar1 = x => x + 1;
// const dup = x => x * 2;

// const compose = (f, g) => (x) => f(g(x));
// const pipe = (f, g) => (x) => g(f(x));

//questao 20: lazy é usado quando queremos evitar desperdício de cálculos, ela adia até o valor ser realmente necessário, permite trabalhar com ed's infinitas.

//questao 21: As funções internas guardam (lembram) as variáveis do escopo onde nasceram, mesmo após o retorno da função externa.
// function createCounter() {
//   let count = 0; // estado privado

//   return {
//     increment() {
//       count++;
//     },
//     getCount() {
//       return count;
//     }
//   };
// }

// const counter = createCounter();

// counter.increment();
// console.log(counter.getCount()); // 1

//questao 24
// const vendas = [
//   { produto: "Notebook", preco: 3500, quantidade: 1, status: "pago" },
//   { produto: "Mouse", preco: 50, quantidade: 3, status: "pendente" },
//   { produto: "Teclado", preco: 150, quantidade: 2, status: "pago" },
//   { produto: "Monitor", preco: 1200, quantidade: 1, status: "pago" },
//   { produto: "Webcam", preco: 80, quantidade: 5, status: "pendente" },
// ];

// const pipe = (...fns) => (valorInicial) =>
//   fns.reduce((valor, fn) => fn(valor), valorInicial);

// const filterVendasPagas = (lista) =>
//   lista.filter((v) => v.status === "pago");

// const mapTotalItem = (lista) =>
//   lista.map((v) => v.preco * v.quantidade);

// const reduceTotalGeral = (totais) =>
//   totais.reduce((soma, t) => soma + t, 0);

// const exibirTotalGeral = (total) => {
//   document.getElementById("totalGeral").textContent =
//     "Total Geral: R$ " + total.toFixed(2);
// };

// const calcularReceita = pipe(
//   filterVendasPagas,
//   mapTotalItem,
//   reduceTotalGeral
// );

// document.getElementById("calcularReceitaTotal")
//   .addEventListener("click", () => {
//     const resultado = calcularReceita(vendas);
//     exibirTotalGeral(resultado);
//   });

//questao 25: c

// //questao 26: imperativo: você descreve passo-a-passo
// function fatorial(n) {
//   let resultado = 1;
//   for (let i = 1; i <= n; i++) {
//     resultado *= i;
//   }
//   return resultado;
// }

// declarativo: foco no resultado, não no passo
// const fatorial = n =>
//   Array.from({ length: n }, (_, i) => i + 1)
//       .reduce((acc, x) => acc * x, 1); 

//quetao 27: c

//questao 28: a

//questao 29: d

//questao 30: a
