const log = (nivel) => (tag) => (mensagem) => console.log(`[${nivel}] <${tag}>: ${mensagem}`);

log("ERRO")("SERVIDOR")("Conexão perdida");

const logErroServer = log("ERRO")("SERVIDOR");
logErroServer("Falha ao conectar com o servidor!");
logErroServer("Erro 500");