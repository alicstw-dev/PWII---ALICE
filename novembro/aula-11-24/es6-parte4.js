// function Pessoa(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
// }
// Pessoa.prototype.aniversario = function() {
//     this.idade++;
//     console.log(`Feliz aniversário, ${this.nome}! Agora você tem ${this.idade} anos.`);
// };

// const p = new Pessoa("Alice", 19);
// console.log(p.nome)
// p.aniversario(); // Feliz aniversário, João! Agora você tem 21 anos.

class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    aniversario(){
        this.idade++;
        console.log(`Feliz aniversário, ${this.nome}! Agora você tem ${this.idade} anos.`);
    }
}
const p = new Pessoa("Alice", 19);
console.log(p)