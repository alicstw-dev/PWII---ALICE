function simularChamadaAPI() {
    return new Promise((resolve, reject) => {
        console.log('Chamando API...');
        setTimeout(() => {
            const sucesso = Math.random() > 0.2; // 80% de chance
            if (sucesso) {
            resolve({ status: 'ok', dados: [1, 2, 3] });
            } else {
            reject(new Error('Falha na API'));
            }
            }, 2000);
    });
}

simularChamadaAPI()
    .then((resposta) => console.log(resposta.dados) )
    .catch ((erro) => console.log(erro));