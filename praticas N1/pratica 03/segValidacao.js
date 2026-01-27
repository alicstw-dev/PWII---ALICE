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
