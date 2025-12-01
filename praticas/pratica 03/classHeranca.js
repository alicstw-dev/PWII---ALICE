/**
 * Desenvolva a estrutura de classes para gerenciar diferentes tipos de usuários em um sistema. As classes foram introduzidas no ES6 como uma
sintaxe mais clara para criar objetos e lidar com herança.
1. Crie uma classe base chamada Usuario com um construtor que aceita nome e email . Adicione um método exibirInfo() que
imprime as informações básicas.
2. Crie uma subclasse chamada Administrador que extends (herda) de Usuario .
3. O construtor de Administrador deve aceitar nome , email e nivelAcesso . Dentro do construtor, use a palavra-chave super() para
chamar o construtor da classe Usuario .
4. Na classe Administrador , sobrescreva o método exibirInfo() para incluir também o nivelAcesso . Use super.exibirInfo() para
reutilizar a lógica da classe pai antes de adicionar o nível de acesso.
5. Instancie ambas as classes e chame o método exibirInfo() para cada objeto.
 */

// class Usuario{
//     constructor(nome, email){
//         this.nome = nome;
//         this.email = this.email;
//     }

//     exibirInfo(){
//         return `Seu nome é: ${this.nome} e o email: ${this.email}`
//     }
// }

// class Administrador extends Usuario {
//     constructor(nome, email, nivelAcesso) {
//         super(nome, email); 
//         this.nivelAcesso = nivelAcesso;
//     }

//     exibirInfo() {
//         return `${super.exibirInfo()} | Nível de acesso: ${this.nivelAcesso}`;
//     }
// }

// const usuario = new Usuario("Ana", "ana@email.com");
// const admin = new Administrador("Carlos", "carlos@email.com", "superadmin");

// console.log(usuario.exibirInfo());
// console.log(admin.exibirInfo());

/**
 * Em um sistema de gerenciamento financeiro, é vital que o saldo de uma conta seja protegido contra alterações externas não controladas
(encapsulamento). Embora as Classes tenham sido introduzidas no ES6, a funcionalidade de campos de classe privados ( # ) é um recurso mais
recente (ES2022).
Tarefa:
1. Crie uma classe ContaBancaria .
2. Defina o saldo como um campo de classe privado usando a sintaxe #saldo . Este campo deve ser inicializado com 0 (zero) no
construtor.
3. Implemente um método público chamado depositar(valor) que incrementa o #saldo .
4. Implemente um método público chamado sacar(valor) que decrementa o #saldo , mas apenas se o valor for menor ou igual ao
saldo atual.
5. Implemente um método público chamado consultarSaldo() que retorna o valor do #saldo .
6. Instancie a classe e tente acessar #saldo diretamente fora da classe (ex: minhaConta.#saldo = 1000; ). Observe e explique o erro,
demonstrando como o encapsulamento é aplicado.
 */

// class ContaBancaria {
//     #saldo;
//     constructor(){
//         this.#saldo = 0;
//     }

//     getSaldo() {
//         return this.#saldo;
//     }

//     depositar(valor) {
//         this.#saldo += valor;
//     }

//     sacar(valor) {
//         if (this.#saldo >= valor) {
//             this.#saldo -= valor;
//         } else {
//             console.log("Saldo insuficiente");
//         }
//     }

//     consultarSaldo(){
//         return this.#saldo;
//     }
// }
// const minhaConta = new ContaBancaria();

// minhaConta.depositar(500);
// console.log(minhaConta.consultarSaldo());

// minhaConta.sacar(200);
// console.log(minhaConta.consultarSaldo());

// console.log(minhaConta.#saldo); 

//Porque campos privados (#) só podem ser acessados dentro da própria classe. Nem subclasses conseguem acessar, muito menos código externo.


