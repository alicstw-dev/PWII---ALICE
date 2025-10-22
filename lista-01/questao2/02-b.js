const readline = require("readline-sync");
const pi = 3.14;

let raio = parseInt(readline.question("Valor do raio: "));


console.log("Valor da Circunferência: " + (2 * pi * raio).toFixed(2));