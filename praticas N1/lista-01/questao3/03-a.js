const readline = require("readline-sync");

let n1 = parseFloat(readline.question("Número 1: "));
let n2 = parseFloat(readline.question("Número 2: "));
let simbolo = readline.question("Digite a operação (+, -, *, /): ");

function calculadora(n1, n2, simbolo) {
    if (simbolo === "+") {
        return n1 + n2;
    } else if (simbolo === "-") {
        return n1 - n2;
    } else if (simbolo === "*") {
        return n1 * n2;
    } else if (simbolo === "/") {
        if (n2 === 0) {
            return "Erro: divisão por zero!";
        }
        return n1 / n2;
    } else {
        return "Operação inválida!";
    }
}

let resultado = calculadora(n1, n2, simbolo);
console.log("Resultado:", resultado);
