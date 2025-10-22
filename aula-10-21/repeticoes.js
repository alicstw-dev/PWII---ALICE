/**
 * Aula sobre estruturas de repetição 
 * Data: 21/10/2025
 */

const  pilotos =["Max Verstappen", "Charles Leclerc", "Oscar Piastri", "Carlos Sainz"]

//for or
for (let aluno of alunos){
    //console.log(aluno);
}

function imprimir(valor){
    //console.log(valor);
}

//o forEach() itera um array, chamando uma função  para cada elemento
alunos.forEach(imprimir)

/**
 * Repetições em Objetos
 */

const escola = {
    nome: "IFCE - Campus Tauá",
    endereco: "Rua Ant Teixeira Benevides, 01, colibris",
    qtdAlunos: 500,
    cnpj: "10.744.098/0015-40",
    diretor: "Alan Sombra",
    cursos: ["ADS", "Telemática", "Letras", "RDC", "Agropecuária", "InfoNet", "EJA"]
}

//for in percorre propriedades de objetos
for (let chave in escola){
    console.log(escola[chave]);
}