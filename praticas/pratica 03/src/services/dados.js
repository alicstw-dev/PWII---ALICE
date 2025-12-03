export default async function buscarDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([10, 20, 30, 40]);
        }, 2000);
    });
}