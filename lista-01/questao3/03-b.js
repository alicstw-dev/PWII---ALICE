function produtorio(...numeros) {
    let resultado = 1; 
    for (let num of numeros) {
        resultado *= num; 
    }
    return resultado;
}


console.log(produtorio(2, 3, 4)); 

