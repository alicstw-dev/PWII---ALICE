const readline = require("readline-sync");

let reais = parseFloat(readline.question("Valor em reais (R$): "));
let dolar = parseFloat(readline.question("Cotação do dólar: "));

console.log("Valor em dólares: US$ " + (reais / dolar).toFixed(2));