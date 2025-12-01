const readline = require("readline-sync");

let n1 = parseFloat(readline.question("Média da N1: "));
let n2 = parseFloat(readline.question("Média da N2: "));

const mediap = ((n1 * 2) + (n2 * 3)) / 5

function situacao(mediap){
    if(mediap >= 7){
        console.log("Aprovado")
    }
    else if(mediap >= 3 && mediap <7) {
        console.log("Vai pra Final")
    }
    else{
        console.log("Reprovado")
    }
}

situacao(mediap)
