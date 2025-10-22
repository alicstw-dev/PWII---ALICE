const readline = require("readline-sync");

const produtos = {
    camisa: 56.50,
    tenis: 130.00,
    calça: 120.00,
    colar: 35.00,
};

let quant = {
    camisa: 0,
    tenis: 0,
    calça: 0,
    colar: 0,
};

console.log("\nProdutos disponíveis:");
for (let item in produtos) {
    console.log(`${item} - R$ ${produtos[item].toFixed(2)}`);
}

while (true) {
    let esc = readline.question("\nEscolha um produto ou digite 'sair' para encerrar: ").toLowerCase();

    if (esc === "sair") {
        break;
    }

    switch (esc) {
        case "camisa":
            quant.camisa++;
            break;

        case "tenis":
            quant.tenis++;
            break;

        case "calça":
        case "calca": 
            quant["calça"]++;
            break;

        case "colar":
            quant.colar++;
            break;

        default:
            console.log("Produto inválido! Tente novamente.");
    }
}

let valorTotalBruto = 0;
for (let item in produtos) {
    valorTotalBruto += produtos[item] * quant[item];
}

let descontoPercentual = parseFloat(
    readline.question("\nQuer desconto? Digite a porcentagem (ou 0 se não quiser): ")
);

if (isNaN(descontoPercentual) || descontoPercentual < 0 || descontoPercentual > 100) {
    descontoPercentual = 0;
}

const valorDesconto = valorTotalBruto * (descontoPercentual / 100);
const valorFinal = valorTotalBruto - valorDesconto;

console.log("\n--- RESUMO DA COMPRA ---");
for (let item in quant) {
    if (quant[item] > 0) {
        console.log(`${quant[item]}x ${item} - R$ ${(produtos[item] * quant[item]).toFixed(2)}`);
    }
}
console.log("\nValor Bruto: R$ " + valorTotalBruto.toFixed(2));
console.log("Desconto Aplicado: " + descontoPercentual.toFixed(0) + "% (R$ " + valorDesconto.toFixed(2) + ")");
console.log("Valor Final a Pagar: R$ " + valorFinal.toFixed(2));
