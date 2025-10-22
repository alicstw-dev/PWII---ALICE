/**
 * Aula sobre arrays, objetos e funções
 */

const equipes = [
  {
    nome: "Ferrari",
    qtdTitulos: 16,
    pilotos: ["Hamilton", "Leclerc"],
  },
  
  {
    nome: "RedBull",
    qtdTitulos: 6,
    pilotos: ["Max", "Yuki"],
  }
];
 
let totalTitulos = 0;

function contarTitulos(equipe){
  totalTitulos += equipe.qtdTitulos;
}

equipes.forEach(contarTitulos);

console.log(totalTitulos);

