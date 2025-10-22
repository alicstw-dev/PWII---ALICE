const readline = require("readline-sync");

let n = parseFloat(readline.question("Número: "));

function fatorial(n) {
    if (n < 0) return "Número inválido"; 
    if (n === 0 || n === 1) return 1;  
    return n * fatorial(n - 1);        
}

console.log(fatorial(n))