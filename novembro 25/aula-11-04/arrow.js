
sum(3,5);

// Tradicional
function sum(a,b){
    return a + b;
}

// Function Expression | Função anônima | Elas não são elevadas ao topo do escopo (hoisting)
const sumFe = function(a,b){
    return a + b;
}

const sumArrow = (a,b) => a + b;

const dobro = a => b * 2;

setTimeout(() => console.log(Date.now()), 1500);

setInterval(() => console.log('Executando...'), 2500)