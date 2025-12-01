
/**
 * Exercício 1.1: Processamento de Resposta de API e Configurações
 * 
 * 1. Destructuring de Objeto: Você recebe um objeto respostaApi contendo { id: 101, username: "user_a", email: "a@ex.com",
status: "ativo" } . Use Destructuring para extrair apenas username e email em variáveis separadas.
 */

// const respostaApi = {
//     id: 101, 
//     username: "user_a",   
//     email: "a@ex.com",
//     status: "ativo"
// };

// const {username, email} = respostaApi;
// console.log(username);

/**
 * 2. Rest Operator em Objeto: Use Destructuring e o Rest Operator para extrair id e agrupar as demais propriedades restantes em um
novo objeto chamado dadosComplementares .
 */

// const {id, ...dadosComplementares} = respostaApi;
// console.log(dadosComplementares);

/**
 * 3. Spread Operator: Combine um objeto de configurações padrão ( configPadrao = { tema: 'dark', notificacoes: true } ) com um
objeto de configurações do usuário ( configUsuario = { notificacoes: false } ) usando o Spread Operator para criar configFinal . O
resultado deve garantir que a configuração do usuário prevaleça.
 */

// const configPadrao = {
//     tema: 'dark',
//     notificacoes: true
// };

// const configUsuario = {
//     notificacoes: false
// };

// const configFinal = {
//     ...configPadrao,
//     ...configUsuario
// };

/**
 * Crie uma função registrarEvento que sempre requer o tipo do evento, mas pode aceitar um número variável de metadados adicionais.
1. Defina a função registrarEvento(tipo, ...metadados) . O Rest Operator ( ... ) deve ser o último parâmetro.
2. Dentro da função, imprima o tipo e o array metadados .
3. Chame a função com diferentes números de argumentos, demonstrando como o Rest Operator agrupa os argumentos adicionais em um
array.
 */

// function registrarEvento(tipo, ...metadados) {
//     console.log("Tipo do evento:", tipo);
//     console.log("Metadados:", metadados);
// }
// registrarEvento("click", "botão-azul");

// const props = {
//     id: "btn-submit",
//     className: "btn-primary",
//     onClick: () => {},
//     "data-acao": "enviar",
//     disabled: true,
//     title: "Enviar formulário"
// };

// function prepararPropsBotao(props){
//     const {id, className, onClick, ...atributosNativos} = props;
    
//     const configuracaoPadrao = {
//     id: 'default-id', 
//     type: 'button',
//     disabled: false
// };

// const propsFinais = {
//     ...configuracaoPadrao, 
//     ...atributosNativos, 
//     disabled: false 
// };

//     return propsFinais;
// }



// const resultado = prepararPropsBotao(props);
// console.log(resultado);

/**
 * Em um objeto complexo que representa as configurações de um sistema, algumas propriedades podem estar faltando.
1. Crie um objeto configuracoes onde a propriedade cache pode estar undefined ou null .
2. Use o Optional Chaining Operator ( ?. ) para tentar acessar a propriedade configuracoes.cache.tempoExpiracao de forma segura,
garantindo que a expressão retorne undefined em vez de lançar um erro, caso cache não exista.
3. Suponha que a API retorne um valor para tempoExpiracao que pode ser 0 (zero, indicando cache ilimitado), null ou undefined . Use
o Nullish Coalescing Operator ( ?? ) para atribuir um valor padrão de 600 segundos apenas se o valor for estritamente null ou
undefined , mas mantendo o 0 se ele for retornado.
 */

// const config = {
//     cache: {
//          tempoExpiracao: 0,
//     } 
   
// }

// console.log(config.cache?.tempoExpiracao)
// console.log(config.cache?.tempoExpiracao ?? 600 )
 /**
  * 1. Crie três objetos simulando dados de telemetria:
dispositivo1 : { info: { bateria: { nivel: 85 } } }
dispositivo2 : { info: null } (A propriedade info existe, mas é null )
dispositivo3 : { info: { bateria: { nivel: 0 } } } (O nível da bateria é 0, o que é um valor válido)
2. Para cada dispositivo, use o Optional Chaining Operator ( ?. ) para tentar acessar a propriedade aninhada nivel dentro de bateria
e info .
3. Combine a expressão anterior com o Nullish Coalescing Operator ( ?? ) para garantir que, se a propriedade nivel for estritamente
null ou undefined , o valor padrão de -1 (indicando indisponível) seja retornado. O valor 0 deve ser mantido, pois é um valor
válido (diferente do comportamento do operador || ).
4. Imprima o resultado de cada acesso, explicando por que dispositivo3 retorna 0 e dispositivo2 retorna -1 .
  */

// const dispositivo1 = { info: { bateria: { nivel: 85 } } };
// const dispositivo2 = { info: null };
// const dispositivo3 = { info: { bateria: { nivel: 0 } } };

// console.log(dispositivo1.info?.bateria.nivel ?? -1)
// console.log(dispositivo2.info?.bateria.nivel ?? -1)
// console.log(dispositivo3.info?.bateria.nivel ?? -1)

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