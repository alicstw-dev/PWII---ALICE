// Assíncrono e Não Bloqueante
import { readFile } from 'node:fs';
// não trava a execução
// usa callback para notificar quando terminar
readFile('arquivo.txt', 'utf-8', (err, dados) => {
if (err) {
    console.error('Erro na leitura:', err);
    return;
}
console.log("Leitura concluída:", dados);
});

console.log("Isso deveria aparecer")