/**
 * Aula sobre imutabilidade
 * Data: 20/10/25 */

 //Valores Primitivos 

let a = "Maria";
a = Marcos; //não altera o valor inicial, simplesmente atribui outro valor
a[2] = "l"; //NAO ALTERA

console.log(a);

let b = a; // cópia do valor
console.log|("Valor de a: " + a, "Valor de b:" + b);

b = "Vitor";
console.log("Valor de a: " + a, "Valor de b:" + b);

//Valores por referência 
const c = [2, 4, 6, 8];
const d = c;

console.log(c,d)