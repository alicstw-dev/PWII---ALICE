
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


